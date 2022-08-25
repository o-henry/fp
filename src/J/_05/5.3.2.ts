class Maybe<T> {
    static just<T>(a: T): Just<T> {
        return new Just(a);
    }

    static nothing() {
        return new Nothing();
    }

    static from_nullable<T>(a: T) {
        return a !== null ? Maybe.just(a) : Maybe.nothing();
    }

    static of<T>(a: T) {
        return this.just<T>(a);
    }

    get is_nothing(): boolean {
        return false;
    }

    get is_just(): boolean {
        return false;
    }
}

class Just<T> extends Maybe<T> {
    constructor(private value: T) {
        super();
    }

    get _value() {
        return this.value;
    }

    fmap<U>(f: (A: T) => U): Just<U> | Nothing<U> {
        return Maybe.from_nullable(f(this.value));
    }

    get_or_else() {
        return this.value;
    }

    filter<U>(f: (A: T) => U): Maybe<U> {
        return Maybe.from_nullable(f(this.value) ? this.value : null);
    }
}

class Nothing<T> extends Maybe<T> {}

export {};
