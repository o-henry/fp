/**
 * semi group 은 두 개 이상의 값을 결합하는 레시피다.
 */

import { Semigroup } from "fp-ts/lib/Semigroup";

/**
 * composition
 * a. semigroup
 * A valid semigroup must have a `concat` method with the following signature
 * concat :: Semigroup a => a ~> a -> a
 */

[1].concat([2]); // [1, 2]
/**
 * Magma의 정의를 인터페이스로 표현
 * a set or type(A)
 * a concat operation
 * no laws to obey
 */
interface Magma<A> {
    readonly concat: (first: A, second: A) => A;
}

const semigroup_all: Semigroup<string> = {
    concat: (first, second) => first + second,
};

export type { Magma };
