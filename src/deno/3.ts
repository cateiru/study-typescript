// https://atcoder.jp/contests/abc172/tasks/abc172_a
import { readFileStrSync } from "https://deno.land/std/fs/read_file_str.ts";

const input: string[] = readFileStrSync("/dev/stdin", { encoding: "utf8" })
  .split(" ");

const n: number = +input[0];

const output: number = n + Math.pow(n, 2) + Math.pow(n, 3);

console.log(output);
