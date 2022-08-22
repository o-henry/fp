import { pipe } from "fp-ts/lib/function";
import { sort } from "fp-ts/lib/ReadonlyArray";
import * as N from "fp-ts/number";
import { Ord } from "fp-ts/Ord";

pipe([3, 1, 2], sort(N.Ord), console.log);

export {};
