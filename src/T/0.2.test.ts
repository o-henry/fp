import { pipe } from "fp-ts/lib/function";

describe("composition", () => {
    // combinator: Thing -> Thing
    it("combinator", () => {
        const double = (n: number): number => n * 2;

        expect(pipe(2, double, double, double)).toBe(16);
    });
});

export {};
