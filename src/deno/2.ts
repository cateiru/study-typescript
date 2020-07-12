// https://atcoder.jp/contests/abc173/tasks/abc173_a
import { readFileStrSync } from "https://deno.land/std/fs/read_file_str.ts";

const input: string[] = readFileStrSync("/dev/stdin", { encoding: "utf8" })
  .split(" ");

const n: number = +input[0];

var output: number = n % 1000;
if (output != 0) {
  output = 1000 - output;
}

console.log(output);
