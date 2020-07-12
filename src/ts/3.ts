// Denoを使用して、実行する。
// deno run --allow-read [this file]
// 入力したら、ctrl+D を使用してEOF文字を入力する必要がある。

import { readFileStrSync } from 'https://deno.land/std/fs/read_file_str.ts';

const input = readFileStrSync('/dev/stdin', { encoding: "utf8" }).split(' ');

const a: number = +input[0];

console.log(a);
