/* containerization */
class Wrapper<T> {
    constructor(private value: T) {
        this.value = value;
    }

    // map :: (A -> B) -> A -> B
    map(f: (A: T) => T) {
        return f(this.value);
    }

    // fmap :: (A -> B) -> Wrapper[A] -> Wrapper[B]
    fmap(f: (A: T) => Wrapper<T>) {
        return new Wrapper(f(this.value));
    }

    toString(value: T) {
        return `Wrapper (${value})`;
    }
}

export { Wrapper };
