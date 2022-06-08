// Copyright (c) 2022 System233
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { WebSocket, WebSocketServer } from 'ws'
import {TSON} from 'tson-serializer'
export const WS_HOST=process.env.WS_HOST??'0.0.0.0';
export const WS_PORT=parseInt(process.env.WS_PORT)||8899;
export const WS_URL=process.env.WS_URL||'ws://localhost:8899';
export const ALITA_PATH=process.env.ALITA_PATH||'./alita.node';
export type SyncData = {name: string, member: string, target: string, id: string, once: boolean, args: any[]};
export type CallbackData=[id:string,data:any[]];
export interface IServerHandler {
    sync(targetId:string,name:string,member:string,args:any[]):any;
    async(targetId:string,name:string,member:string,callbackId:string,args:any[]):any
    once(targetId:string,name:string,member:string,callbackId:string,args:any[]):any;
}
export interface IClientHandler {
    callback(callbackId:string,...args:any):void;
}
export type ISender=(data:any,cb:(err:Error)=>void)=>void;
export type IRecvicer=(data:any)=>void;
export type IHandler=(sender:ISender)=>IRecvicer;

const tson=TSON;

export const Bind=(socket:WebSocket,handler:IHandler)=>{
    const sender:ISender=(data,cb)=>socket.send(Buffer.from(tson.stringify(data)),cb);
    const recviver=handler(sender);
    socket.on('message',(data)=>(Array.isArray(data)?data:[data]).forEach(x=>recviver(tson.parse(Buffer.from(x).toString('utf-8')))));
}
export const RunAsServer=(handler:IHandler,error:(error:Error)=>void)=>{
    const ws=new WebSocketServer({host:WS_HOST,port:WS_PORT});
    ws.on('connection',(socket,request)=>{
        const remoteAddress=`${request.socket.remoteAddress}:${request.socket.remotePort}->${request.socket.localPort}`;
        console.log(Date.now(),'connection', remoteAddress);
        socket.on('close',()=>console.log(Date.now(),'close',remoteAddress));
    });
    ws.on('connection',(socket)=>Bind(socket,handler));
    ws.on('error',error);
    console.log('WebSocket server running on',WS_PORT);
}
export const RunAsClient=(handler:IHandler,error:(error:Error)=>void)=>{
    const socket=new WebSocket(WS_URL);
    socket.on('open',()=>Bind(socket,handler));
    socket.on('error',error);
    socket.on('close',(code,reason)=>error(new Error(`${reason.toString('utf-8')} (${code})`)));
}