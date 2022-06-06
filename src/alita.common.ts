// Copyright (c) 2022 System233
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import { deserialize, serialize } from 'v8';
import { WebSocket, WebSocketServer } from 'ws'

export const WS_HOST='0.0.0.0';
export const WS_PORT=8899;
export type SyncData = [name: string, member: string, target: string, id: string, once: boolean, args: any[]];
export type CallbackData=[id:string,data:any[]];
export interface IServerHandler {
    sync(targetId:string,name:string,member:string,args:any[]):any;
    async(targetId:string,name:string,member:string,callbackId:string,args:any[]):any
    once(targetId:string,name:string,member:string,callbackId:string,args:any[]):any;
}
export interface IClientHandler {
    callback(callbackId:string,data:any):void;
}
export type ISender=(data:any,cb:(err:Error)=>void)=>void;
export type IRecvicer=(data:any)=>void;
export type IHandler=(sender:ISender)=>IRecvicer;

export const Bind=(socket:WebSocket,handler:IHandler)=>{
    const sender:ISender=(data,cb)=>socket.send(serialize(data),cb);
    const recviver=handler(sender);
    socket.on('message',(data)=>(Array.isArray(data)?data:[data]).forEach(x=>recviver(deserialize(Buffer.from(x)))));
}
export const RunAsServer=(handler:IHandler)=>{
    const ws=new WebSocketServer({host:WS_HOST,port:WS_PORT});
    ws.on('connection',(socket)=>Bind(socket,handler));
}
export const RunAsClient=(handler:IHandler)=>{
    const socket=new WebSocket(`ws://localhost:8899`);
    socket.on('open',()=>Bind(socket,handler));
}