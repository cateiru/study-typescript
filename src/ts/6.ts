// file read and write

import * as fs from 'fs';
import {join} from 'path';

// ----read-----

const path = 'README.md';

try {
    const buffer = fs.readFileSync(path, 'utf-8');
    console.log(buffer);
} catch(error) {
    console.log(`failed to read ${error}`);
}

// ----write-----

const dirName = 'tests';
const fileName = 'output.txt';
const newPath: string = join(dirName, fileName);

// create dir
if(!fs.existsSync(dirName)) {
    fs.mkdirSync(dirName);
}

const write_data = `Hello World! 1+2=${ 1 + 2}`;

fs.writeFileSync(newPath, write_data, 'utf-8');
