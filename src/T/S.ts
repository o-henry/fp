/**
 * Semigroup
 * Given a Magma if the concat operation is associative(결합법칙) then it's semigroup
 * (x * y) * z = x * (y * z)
 * concat(concat(a, b), c) === concat(a, concat(b, c))
 */

import { Magma } from "./M";
import { Semigroup } from "fp-ts/Semigroup";
import * as N from "fp-ts/number";

// if S is a smeigroup the following has to hold true.
/* S.concat(S.concat(x, y), z) = S.concat(x, S.concat(y, z)) */

import * as Se from "fp-ts/Semigroup";
import { struct, tuple } from "fp-ts/Semigroup";

const Semigroup: Se.Semigroup<ReadonlyArray<string>> = {
    concat: (first, second) => first.concat(second),
};

const Semigroup_sum: Semigroup<number> = {
    concat: (first, second) => first + second,
};

type Vector = {
    readonly x: number;
    readonly y: number;
};

const semigroup_vector: Semigroup<Vector> = {
    concat: (first, second) => ({
        x: N.SemigroupSum.concat(first.x, second.x),
        y: N.SemigroupSum.concat(first.y, second.y),
    }),
};

const v1: Vector = { x: 1, y: 1 };
const v2: Vector = { x: 1, y: 2 };
console.log(semigroup_vector.concat(v1, v2)); // { x: 2 , y : 3 }

const _semigroup_vector: Semigroup<Vector> = struct({
    x: N.SemigroupSum,
    y: N.SemigroupSum,
});

type _Vector = readonly [number, number];
const tuple_semigroup_vector: Semigroup<_Vector> = tuple(
    N.SemigroupSum,
    N.SemigroupSum
);
const _v1: _Vector = [1, 1];
const _v2: _Vector = [1, 2];

export {};
