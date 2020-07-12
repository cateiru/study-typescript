import { readFileStrSync } from "https://deno.land/std/fs/read_file_str.ts";

const input: string[] = readFileStrSync("/dev/stdin", { encoding: "utf8" })
  .split(" ");

const n: string = input[0];

if (n == "a") {
  console.log("a");
} else {
  console.log("A");
}
