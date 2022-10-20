import { pipe } from "fp-ts/function";

declare function _pipe<A, B, C>(a: A, ab: (a: A) => B, bc: (b: B) => C): C;

const len = (s: string): number => s.length;
const double = (n: number): number => n * 2;

console.log(double(len("aaa")), 6);
console.log(pipe("aaa", len, double), 6);

export {};
