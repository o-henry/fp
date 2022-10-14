import { Option, some, none } from "fp-ts/Option";

/**
 * F# code
 * let name50 input =
 *  if input.name.Length > 50 then
 *      Failure "Name must not be longer than 50 chars"
 *  else Success input
 */

type Ipt = { name: string };

let name_50 = (arg: Ipt): Option<Ipt> =>
    arg.name.length > 50 ? some(arg) : none;

// declare const _name_50: (arg: Ipt) => Option<Ipt>;
// declare const _flatten: <A>(mma: ReadonlyArray<ReadonlyArray<A>>) => ReadonlyArray<A>;

export {};
