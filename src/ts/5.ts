import { readFile } from 'fs';
import {promisify} from 'util';

async function main(): Promise<Buffer> {
    var a: string = 'HelloWorld';

    var b = await promisify(readFile)(a);
    return b;
}

console.log(main());
