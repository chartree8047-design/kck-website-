import {cp,mkdir} from 'node:fs/promises';
await mkdir(new URL('../public/assets/forest-shop/',import.meta.url),{recursive:true});
await cp(new URL('../../../assets/forest-shop/',import.meta.url),new URL('../public/assets/forest-shop/',import.meta.url),{recursive:true});
