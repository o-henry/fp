import { pipe } from "fp-ts/lib/function";
import { some, none, Option, match } from "./option";

const head = <A>(as: ReadonlyArray<A>): Option<A> =>
    as.length === 0 ? none : some(as[0]);

declare const numbers: ReadonlyArray<number>;

const result = pipe(
    head(numbers),
    match(
        () => "Empty array",
        (n) => String(n)
    )
);

export {};
