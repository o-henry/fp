import * as R from "ramda";

class Wrapper<T> {
    constructor(private value: T) {}

    static of<T>(a: T): Wrapper<T> {
        return new Wrapper(a);
    }

    fmap<U>(f: (A: T) => U): Wrapper<U> {
        return Wrapper<U>.of(f(this.value));
    }

    join(): Wrapper<T> | T {
        if (!(this.value instanceof Wrapper)) {
            return this;
        }
        return this.value.join();
    }

    get(): T {
        return this.value;
    }

    to_string() {
        return `Wrapper (${this.value})`;
    }
}

describe("Monad", () => {
    it("test", () => {
        const ret = Wrapper.of("Hello Monads!")
            .fmap(R.toUpper)
            .fmap(R.identity)
            .to_string();
    });
});

export { Wrapper };
