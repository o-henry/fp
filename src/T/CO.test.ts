import * as S from "fp-ts/Semigroup";
import * as N from "fp-ts/number";
import { pipe } from "fp-ts/lib/function";

describe("🚀 concatAll", () => {
    it("test_simple", () => {
        const sum = S.concatAll(N.SemigroupSum)(2);
        expect(sum([1, 2, 3, 4])).toBe(12);

        const product = S.concatAll(N.SemigroupProduct)(3);
        expect(product([1, 2, 3, 4])).toBe(72);
    });
});

export {};
