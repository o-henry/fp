import { number } from "fp-ts";
import { Either, isRight } from "fp-ts/Either";
import * as t from "io-ts";

interface PositiveBrand {
    readonly Positive: unique symbol;
}

const Positive = t.brand(
    t.number,
    (n): n is t.Branded<number, PositiveBrand> => 0 < n,
    "Positive"
);

type Postivie = t.TypeOf<typeof Positive>;

export {};
