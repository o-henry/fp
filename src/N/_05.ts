import { Option, none, some } from "fp-ts/Option";

declare const Int: unique symbol;
type Int = number & { _: typeof Int };

const makeInt = (n: number): Option<Int> =>
    Number.isInteger(n) && n >= 0 ? some(n as Int) : none;

// let user_age: Option<Int> = 32; // <- Error!
// let user_wrong_age: Option<Int> = makeInt(-429); // <- Error! but IDE don' know

export {};
