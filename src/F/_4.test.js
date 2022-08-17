"use strict";

const { curry } = require("./_4");

describe("🚀 currying", () => {
    it("_1", () => {
        const add = (x) => (y) => x + y;
        const increment = add(1);
        const add_ten = add(10);

        expect(add(2)(3)).toBe(5);
        expect(increment(2)).toBe(3);
        expect(add_ten(2)).toBe(12);
    });

    it("_2", () => {
        const match = curry((what, s) => s.match(what));
        const replace = curry((what, replacement, s) =>
            s.replace(what, replacement)
        );
        const filter = curry((f, xs) => xs.filter(f));
        const map = curry((f, xs) => xs.map(f));

        match(/r/g, "hello world"); // [ 'r' ]

        const hasLetterR = match(/r/g); // x => x.match(/r/g)
        hasLetterR("hello world"); // [ 'r' ]
        hasLetterR("just j and s and t etc"); // null

        filter(hasLetterR, ["rock and roll", "smooth jazz"]); // ['rock and roll']

        const removeStringsWithoutRs = filter(hasLetterR); // xs => xs.filter(x => x.match(/r/g))
        removeStringsWithoutRs(["rock and roll", "smooth jazz", "drum circle"]); // ['rock and roll', 'drum circle']

        const noVowels = replace(/[aeiou]/gi); // (r,x) => x.replace(/[aeiou]/ig, r)
        const censored = noVowels("*"); // x => x.replace(/[aeiou]/ig, '*')
        censored("Chocolate Rain"); // 'Ch*c*l*t* R**n'
    });
});
