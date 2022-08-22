import * as _ from "lodash";

describe("🚀 Currying", () => {
    it("test_curry_1 ", () => {
        /* currying */
        function __plus_curried(x: number) {
            return function (y: number) {
                return x + y;
            };
        }
        expect(__plus_curried(1)(2)).toBe(3);

        function plus_curried(x: number) {
            /* closure */
            return (y: number) => x + y;
        }
        expect(plus_curried(1)(2)).toBe(3);

        const _plus_curried = (x: number) => (y: number) => x + y;
        expect(_plus_curried(1)(2)).toBe(3);
    });

    it("test_curry_2", () => {
        const add_3 = _.curry((a: number, b: number, c: number) => a + b + c);

        expect(add_3(1, 2, 3)).toBe(6);
        expect(add_3(1)(2, 3)).toBe(6);
        expect(add_3(1)(2)(3)).toBe(6);
    });

    it("test_curry_3", () => {
        const words = ["ability", "caculate", "calendar", "double", "door"];
        const starts_with = (word: string, term: string) =>
            word.startsWith(term);
        words.filter((w) => starts_with(w, "a")).forEach(console.log);

        const _starts_with = (term: string) => (word: string) =>
            word.startsWith(term);
        words.filter(_starts_with("a")).forEach(console.log);

        const __starts_with = _.curry((term: string, word: string) =>
            word.startsWith(term)
        );
        words.filter(__starts_with("a")).forEach(console.log);
    });
});

export {};
