// file read and write

import * as fs from 'fs';
import {join} from 'path';

// ----read-----

const path: string = 'README.md';

try {
    let buffer = fs.readFileSync(path, 'utf-8');
    console.log(buffer);
} catch(error) {
    console.log(`failed to read ${error}`);
}

// ----write-----

const dirName: string = 'tests';
const fileName: string = 'output.txt';
const newPath: string = join(dirName, fileName);

// create dir
if(!fs.existsSync(dirName)) {
    fs.mkdirSync(dirName);
}

const write_data: string = `Hello World! 1+2=${ 1 + 2}`;

fs.writeFileSync(newPath, write_data, 'utf-8');
