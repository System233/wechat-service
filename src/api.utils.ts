// Copyright (c) 2022 System233
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { IAPI } from './api.gen';

export type IRequestHandler<T extends Record<string,any>>=<NS extends keyof T,Method extends keyof T[NS]>(namespace:NS,method:Method,target:T[NS],...args:Parameters<T[NS][Method]>)=>ReturnType<T[NS][Method]>;
export type RequestHandler=IRequestHandler<IAPI>;
export class IHelper<T extends Record<string,any>>{
    constructor(public handler:IRequestHandler<T>){}
    call<NS extends keyof T,Method extends keyof T[NS]>(namespace:NS,method:Method,target:T[NS],...args:Parameters<T[NS][Method]>):ReturnType<T[NS][Method]>{
        return this.handler(namespace,method,target,...args);
    }
};
export type Helper=IHelper<IAPI>;