import { Eq } from "fp-ts/Eq";
import { pipe } from "fp-ts/function";
import * as N from "fp-ts/number";

describe("Modeling equivalence with Eq", () => {
    const equal_number: Eq<number> = {
        equals: (first, second) => first === second,
    };
    it("함수형에서 동일성을 테스트하는 방법", () => {
        expect(equal_number.equals(1, 1)).toBeTruthy();
        expect(equal_number.equals(1, 2)).toBeFalsy();
        expect(equal_number.equals(1, 2)).toEqual(equal_number.equals(2, 1));
    });

    it("checks_whether_a_given_value", () => {
        const elem =
            <A>(E: Eq<A>) =>
            (a: A) =>
            (as: ReadonlyArray<A>): boolean =>
                as.some((e) => E.equals(a, e));

        expect(pipe([1, 2, 3], elem(N.Eq)(2))).toBeTruthy();
    });
});

export {};
