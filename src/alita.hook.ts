// Copyright (c) 2022 System233
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { SyncData } from "./alita.common";
import {alita} from '../protos'

export type Source='main'|'worker';
const beforeHooks=[];
export const beforeHook=(source:Source,data:SyncData,result:[fail:boolean,data:any]):Promise<void>|void=>{
    try {
        if(source=='main'&&data.name=='Context'&&data.member=='init'){
            const config=alita.StartConfig4Js.decode(new Uint8Array(data.args[0]));
            // config.sdkPath='wechatData';
            // const newData=new Uint8Array(alita.StartConfig4Js.encode(config).finish());
            // console.log('DataLength check',data.args[0].byteLength,newData.byteLength)
            // data.args[0]=newData.buffer;
            console.log('Context.init',config.toJSON())
        }
    } catch (error) {
        console.error('beforeHook',error);
    }
}

export const afterHook=(source:Source,data:SyncData,result:[fail:boolean,data:any]):Promise<void>|void=>{
    try {
        
    } catch (error) {
        console.error('afterHook',error);
    }
}

