// Copyright (c) 2022 System233
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import EventEmitter from "events";
import { Alita, Module } from "./alita"
import { nanoid } from 'nanoid'
import { ABIRPC } from 'abi-rpc'
import { receiveMessageOnPort, Worker, MessageChannel, isMainThread, workerData, parentPort } from 'worker_threads'
import { IClientHandler, SyncData, IServerHandler, CallbackData, RunAsClient } from "./alita.common";
const kAlitaTarget = Symbol('AlitaTarget');
class ClientHandler implements IClientHandler {
    constructor(public handler: (value: CallbackData) => void) { }
    callback(callbackId: string, data: any) {
        this.handler([callbackId, data]);
    }
}
const log=(...args:any)=>{
    console.log('[Worker]',...args);
}
export = (() => {
    if (isMainThread) {
        log('Loading Main Worker');
        const getMemberParams = (name: string, member: string) => {
            const params = Array.from((Alita[name] || {})[member]?.params || []);
            if (member.endsWith('Async') || member == 'setOnNotify') {
                params.push('callback');
            }
            return params;
        }
        const { port1: mainPort, port2: workerPort } = new MessageChannel;
        const buffer = new SharedArrayBuffer(4);
        const lock = new Int32Array(buffer);
        const worker = new Worker(__filename, {
            workerData: { workerPort, buffer }, transferList: [workerPort]
        });
        const event = new EventEmitter;
        worker.on('message', (id: string, args: any[]) => event.emit(id, ...args));
        worker.on('messageerror',(error)=>console.error('[Worker]',error));
        const callSync = <T = any>(name: string, member: string, target: string, args: any[]): T => {
            mainPort.postMessage([name, member, target, null, false, args] as SyncData);
            Atomics.wait(lock, 0, 0);
            const { message } = receiveMessageOnPort(mainPort);
            return message;
        }
        const callAsync = (name: string, member: string, target: string, args: any[]) => {
            const callback = args[args.length - 1];
            const callbackId = [name, member, target].join('.');
            event.on(callbackId, callback);
            mainPort.postMessage([name, member, target, callbackId, false, args.slice(0, -1)] as SyncData);
        }
        const callAsyncOnce = (name: string, member: string, target: string, args: any[]) => {
            const callback = args[args.length - 1];
            const callbackId = nanoid();
            event.once(callbackId, callback);
            mainPort.postMessage([name, member, target, callbackId, true, args.slice(0, -1)] as SyncData);
        }

        const getHandler = (name: string, member: string) => {

            if (member == 'constructor') {
                const constructor = function (...args: any[]) {
                    if(!new.target){
                        return Reflect.construct(constructor,args);
                    }
                    const target = callSync(name, member, null, args);
                    Reflect.set(this, kAlitaTarget, target);
                    return this;
                }
                Object.defineProperty(constructor, 'name', { value: name, writable: false })
                return constructor;
            }
            if (member.endsWith('Async')) {
                const asyncMember = function (...args: any[]) {
                    const target = Reflect.get(this, kAlitaTarget);
                    callAsyncOnce(name, member, target, args);
                }
                Object.defineProperty(asyncMember, 'name', { value: name, writable: false })
                return asyncMember;
            }
            if (member == 'setOnNotify') {
                const setOnNotify = function (...args: any[]) {
                    const target = Reflect.get(this, kAlitaTarget);
                    callAsync(name, member, target, args);
                }
                return setOnNotify;
            }
            const value = function (...args: any[]) {
                const target = Reflect.get(this, kAlitaTarget);
                return callSync(name, member, target, args);
            }
            Object.defineProperty(value, 'name', { value: name, writable: false })
            return value;

        }

        return Object.fromEntries(Object.entries(Module).map(([name, members]) => {
            const constructor = getHandler(name, 'constructor');
            Object.defineProperties(constructor.prototype, Object.fromEntries(members.filter(name => name != 'constructor').map(member => {
                const value = getHandler(name, member);
                Reflect.set(value, 'params', getMemberParams(name, member));
                return [
                    member,
                    {
                        value
                    }
                ]
            })));
            return [
                name,
                constructor
            ];
        }))
    } else {
        log('Loading Async Worker');
        const { workerPort, buffer } = workerData as { workerPort: MessagePort, buffer: SharedArrayBuffer };
        const lock = new Int32Array(buffer);
        RunAsClient((sender) => {
            const handler = new ABIRPC<IServerHandler>(sender, new ClientHandler((value) => parentPort.postMessage(value)));
            workerPort.addEventListener('message', async (event: MessageEvent) => {
                try {
                    const [name, member, target, id, once, args] = event.data as SyncData;
                    const data = id != null ? await handler.call(once ? 'once' : 'async', target, name, member, id, args) : await handler.call('sync', target, name, member, args);
                    workerPort.postMessage(data);
                } catch (error) {
                    parentPort.emit('messageerror',error);
                }finally{
                    Atomics.notify(lock, 0);
                }
            });
            return data => handler.handle(data);
        },(error)=>parentPort.emit('messageerror',error));
    }
})()
