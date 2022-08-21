import * as R from "ramda";

import { Wrapper } from "./5.2";

describe("🚀 test_functor", () => {
    it("should_return_value", () => {
        // wrap :: A -> Wrapper(A)
        const wrap = (val: string) => new Wrapper(val);

        const wrapped_value = wrap("Get Functional");

        expect(wrapped_value.map(R.identity)).toBe("Get Functional");
        expect(wrapped_value.map(R.toUpper)).toBe("GET FUNCTIONAL");
    });

    it("2+3=5", () => {
        const plus = R.curry((a, b) => a + b);
        const plus_3 = plus(3);

        const wrap = (val: number) => new Wrapper(val);

        const two = wrap(2);
        const five = two.fmap(plus_3); // Wrapper(5)
        expect(five.map(R.identity)).toBe(5);
    });
});
