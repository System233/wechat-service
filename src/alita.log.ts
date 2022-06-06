// Copyright (c) 2022 System233
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT


export interface ILog{
    setOnNotify(callback:(msg:any)=>void):void;
    eventExecuteCallback():void;
    start(config:any):void;
    stop():void;
    write(...args:any):void,
    flush():void;
}
export class Log{
    log(name:string,args:any[]){
        console.debug(`[Log.${name}]`,args);
    }
    static{
        Object.defineProperties(this.prototype,Object.fromEntries([
            'setOnNotify',
            'eventExecuteCallback',
            'start',
            'stop',
            'write',
            'flush'
        ].map(name=>[
            name,
            {
                value:function(...args:any[]){
                    this.log(name,args);
                }
            }
        ])))
    }
}
