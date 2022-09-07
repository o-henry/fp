import { pipe } from "fp-ts/lib/function";

const f = (s: string): number => s.length;
const g = (n: number): boolean => n > 2;

const gf = (s: string): boolean => g(f(s));

export {};
