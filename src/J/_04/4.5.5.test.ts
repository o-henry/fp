import * as R from "ramda";

describe("π point-free: μΈμ μ μΈμ΄ νμμλ μ½λ : νμ€μΌκ³Ό μ λμ€ μ² ν", () => {
    it("point-free unix style program", () => {
        const run_program = R.pipe(
            R.map(R.toLower),
            R.uniq,
            R.sortBy(R.identity)
        );

        const result = run_program([
            "Functional",
            "Programming",
            "Curry",
            "Memoization",
            "Partial",
            "Curry",
            "Programming",
        ]);

        expect(result).toMatchObject([
            "curry",
            "functional",
            "memoization",
            "partial",
            "programming",
        ]);
    });
});

export {};
