import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf-8").split(" ");

const a = +input[0];

console.log(a);
