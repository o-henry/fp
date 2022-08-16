import { pipe } from "fp-ts/lib/function";
import { Magma } from "fp-ts/lib/Magma";

describe("🚀 composition", () => {
    //   interface Magma<A> {
    //     readonly concat: (x: A, y: A) => A
    //   }
    const magma_sub: Magma<number> = {
        concat: (first, second) => first - second,
    };

    it("Magma", () => {
        const get_pipeable_concat =
            <A>(M: Magma<A>) =>
            (second: A) =>
            (first: A): A =>
                M.concat(first, second);

        const concat = get_pipeable_concat(magma_sub);

        expect(pipe(10, concat(2), concat(3), concat(1), concat(2))).toBe(2);
    });

    it("Semigroup", () => {
        // (x * y) * z = x * (y * z)
        // concat(concat(a, b), c)) = concat(a, concat(b, c))
        // expect(magma_sub.concat(magma_sub.concat(1, 2), 3));
    });
});

export {};
