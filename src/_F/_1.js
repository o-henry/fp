const constant = require("folktale/core/lambda/constant");

const counter = {
    value: 0,
    next() {
        return ++this.value;
    },
    reset() {
        this.value = 0;
    },
};

counter.reset();
[0, 0, 0].map(constant(counter.next()));
// ==> [1, 1, 1]

// Arrows are evaluated lazily, so they don't work for this
counter.reset();
[0, 0, 0].map((_) => counter.next());
// ==> [1, 2, 3]

// One must store the value somewhere instead
counter.reset();
[0, 0, 0].map(
    (
        (x) => (_) =>
            x
    )(counter.next())
);

/*
 * signature: compose(f, g)(value)
 * type: |
 *   (('b) => 'c, ('a) => 'b) => (('a) => 'c)
 */
var compose = function compose(f, g) {
    return function (value) {
        return f(g(value));
    };
};

const inc = (x) => x + 1;
const double = (x) => x * 2;
const inc_double = compose(double, inc);
inc_double(3); // 8

/** referential transparency */
const _inc_double = compose(x + 1, x * 2)(value);
_inc_double(3); // compose(x*2, x+1)(3)
// f(x*2)(g(3+1))
// f(g(4*2))

const names = ["Alissa", "Max", "Talib"];
const upcase = (name) => name.toUpperCase();
const map = (transform, items) => items.map(transform);
const join = (separator, items) => items.join(separator);

const show_naems = (name) => join(",", map(upcase, names));
show_naems(names); // "ALISSA, MAX, TALIB"

const _show_name = compose(
    (capitals) => join(", ", capitals),
    (names) => map(upcase, names)
);

const _upcase = (name) => name.toUpperCase();
const _map = (transform) => (items) => items.map(transform);
const _join = (separator) => (items) => items.join(separator);
const __show_names = compose(_join(", "), _map(_upcase));

const Maybe = require("folktale/maybe");

export {};
