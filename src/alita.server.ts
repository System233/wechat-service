// Copyright (c) 2022 System233
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { ABIRPC, GetABIPRC } from "abi-rpc";
import { ALITA_PATH, IClientHandler, IServerHandler, RunAsServer } from "./alita.common";
import {nanoid} from 'nanoid'
const instance=require(ALITA_PATH) as Record<string,Function>;
class ServerHander implements IServerHandler{
    map:Map<string,any>=new Map;
    sync(targetId: string,name:string, member: string, args: any[]) {
        const constructor=Reflect.get(instance,name) as Function;
        if(member=='constructor'){
            const id=nanoid();
            const target=Reflect.construct(constructor,args);
            this.map.set(id,target);
            return id;
        }else if(targetId!=null){
            const self=this.map.get(targetId);
            const target=Reflect.get(constructor.prototype,member);
            return Reflect.apply(target,self,args);
        }
        throw new Error("Bad Request.");
    }
    async(targetId: string, name:string,member: string, callbackId: string, args: any[]) {
        const constructor=Reflect.get(instance,name) as Function;
        const target=Reflect.get(constructor.prototype,member) as Function;
        const self=this.map.get(targetId);
        const ctx=GetABIPRC<IClientHandler>(this);
        return Reflect.apply(target,self,[...args,(result:any)=>ctx.call('callback',callbackId,result)]);
    }
    once(target: string, name:string,member: string, callbackId: string, args: any[]) {
        return this.async(target,name,member,callbackId,args);
    }
}


RunAsServer((sender=>{
    const handler=new ABIRPC(sender,new ServerHander);
    return data=>handler.handle(data);
}))