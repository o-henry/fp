import { info } from "console";
import * as R from "ramda";

import { Wrapper } from "./5.2";

describe("🚀 test_functor", () => {
    it("should_return_value", () => {
        // wrap :: A -> Wrapper(A)
        const wrap = (val: string) => new Wrapper(val);

        const wrapped_value = wrap("Get Functional");

        expect(wrapped_value.map(R.identity)).toBe("Get Functional");
        expect(wrapped_value.map(R.toUpper)).toBe("GET FUNCTIONAL");

        /**
         * Wrapper {
         *  map(f) {
         *    return f(this.value);
         *  }
         * }
         *
         * wrap("Get Functional")
         * f("Get Functional")
         *
         * wrapped_value.map(R.identity)
         * export function identity<T>(a: T): T;
         *
         * R.identity("Get Functional")
         */

        // interface Data {}
        // const _wrap = (/* fetch: Promise<Data> */) => new Wrapper(fetch);
        // const data = _wrap(/* http.. */) null or undefined or data ( pending · fulfill · reject )
        // data.map(/* handle error (i.e. null check) */);
    });

    it("2+3=5", () => {
        const plus = R.curry((a, b) => a + b);
        const plus_3 = plus(3);

        const wrap = (val: number) => new Wrapper(val);
        const two = wrap(2);
        const five = two.fmap(plus_3); // Wrapper(5)
        expect(five.map(R.identity)).toBe(5);

        /* fmap이 Wrapper를 반환하기 때문에 계속 체이닝할 수 있다. */
        two.fmap(plus_3).fmap(R.tap(info));
    });
});
