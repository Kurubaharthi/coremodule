//import {readFileSync,writeFileSync} from 'fs';
const a=require("fs");
let fileContent=a.readFileSync('./msg.txt','utf-8');
console.log(fileContent);
