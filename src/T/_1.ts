/**
 * semi group 은 두 개 이상의 값을 결합하는 레시피다.
 */

import { Semigroup } from "fp-ts/lib/Semigroup";
import * as S from "fp-ts/Semigroup";
import * as N from "fp-ts/number";

/**
 * composition
 * a. semigroup
 * A valid semigroup must have a `concat` method with the following signature
 * concat :: Semigroup a => a ~> a -> a
 */

[1].concat([2]); // [1, 2]
interface Magma<A> {
    readonly concat: (first: A, second: A) => A;
}

const semigroup_all: Semigroup<string> = {
    concat: (first, second) => first + second,
};

const sum = S.concatAll(N.SemigroupSum)(2);
console.log(sum([1, 2, 3, 4])); // 12

export {};
