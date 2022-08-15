import { pipe } from "fp-ts/lib/function";

describe("composition", () => {
    it("combinator", () => {
        const double = (n: number): number => n * 2;

        console.log("wtf", pipe(2, double, double, double)); // => 16

        expect(pipe(2, double, double, double)).toEqual(16);
    });
});

export {};
