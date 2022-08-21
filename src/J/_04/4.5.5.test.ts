import * as R from "ramda";

describe("🚀 point-free: 인수 선언이 필요없는 코드 : 하스켈과 유닉스 철학", () => {
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
