import { writeFile } from "fs/promises";
import { join } from "path";
// import { inspect } from "util";
import { Alita, Module} from "./alita";

const defautlExports=`export interface IAPI{\n${Object.keys(Module).map(name=>`    ${name}:${name};\n`).join('')}}`
const result=Object.entries(Module).map(([key,value])=>{
    const module:Record<string,{params:string[]}>=Alita[key]??{};
    const members=value.map(name=>{
        const args=module[name]?.params??[];
        return [name,args];
    });
    return [key,members] as [string, [string,string[]][]];
}).map(([name,members])=>{
    return `export interface ${name}{\n${members.map(([name,params])=>`    ${name}:(${params.map(x=>`${x.trim()}:any`).join(' ,')})=>any;\n`).join('')}}\n`;
}).join('')+defautlExports;

// const dump=(obj:object)=>{
//     const descriptors=Object.entries(
//         Object.getOwnPropertyDescriptors(obj))
//         .map(([key,val])=>[
//             key,
//             Object.keys(Object.getOwnPropertyDescriptors(val.value.prototype))
//             .map(name=>`${name}`)
//         ])
// }

writeFile(join(__dirname,'api.gen.ts'),result);