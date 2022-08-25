import { info } from "console";
import * as R from "ramda";

import { W } from "./5.2";

describe("🚀 test_functor", () => {
    it("should_return_value", () => {
        // wrap :: A -> W(A)
        const wrap = (val: string) => new W(val);

        const wrapped_value = wrap("Get Functional");

        expect(wrapped_value.map(R.identity).toString()).toBe("Get Functional");
        expect(wrapped_value.map(R.toUpper).toString()).toBe("GET FUNCTIONAL");

        /**
         * W {
         *    // map :: (A -> B) -> A -> B
         *    map<U>(f: (A: T) => U): U {
         *               return <U>f(this.value);
         *    }
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
        // const _wrap = (/* fetch: Promise<Data> */) => new W(fetch);
        // const data = _wrap(/* http.. */) null or undefined or data ( pending · fulfill · reject )
        // data.map(/* handle error (i.e. null check) */);
    });

    it("2+3=5", () => {
        const plus = R.curry((a, b) => a + b);
        const plus_3 = plus(3);

        const wrap = (val: number) => new W(val);
        const two = wrap(2);
        const five = two.fmap(plus_3); // W(5)
        expect(five.map(R.identity).toString()).toBe("5");

        /* fmap이 W를 반환하기 때문에 계속 체이닝할 수 있다. */
        two.fmap(plus_3).fmap(R.tap(info));
    });
});
