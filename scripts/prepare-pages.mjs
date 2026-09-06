import {readdir,mkdir,copyFile,writeFile} from 'node:fs/promises';
import path from 'node:path';
const root='dist/client';
async function visit(dir){for(const file of await readdir(dir,{withFileTypes:true})){const full=path.join(dir,file.name);if(file.isDirectory())await visit(full);else if(file.name.endsWith('.html')&&!['index.html','404.html'].includes(file.name)){const target=full.slice(0,-5);await mkdir(target,{recursive:true});await copyFile(full,path.join(target,'index.html'));}}}
await visit(root);
await writeFile(path.join(root,'.nojekyll'),'');
console.log('GitHub Pages directory URLs prepared.');
