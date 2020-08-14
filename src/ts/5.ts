import { readFile } from 'fs';
import {promisify} from 'util';

async function main(): Promise<Buffer> {
    const a = 'HelloWorld';

    const b = await promisify(readFile)(a);
    return b;
}

console.log(main());
