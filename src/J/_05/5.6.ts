class Either<E, A, R> {
    constructor(private value: R) {}

    get _value() {
        return this.value;
    }

    static left<E>(a: E): Left<E> {
        return new Left(a);
    }

    static right<A>(a: A): Right<A> {
        return new Right(a);
    }

    static from_nullable<R>(val: R) {
        return val !== null && val !== undefined
            ? Either.right(val)
            : Either.left(val);
    }

    static of<A>(a: A): Right<A> {
        return Either.right(a);
    }
}

class Left<E, A, R> extends Either<E, A, R> {
    constructor(private value: E) {
        super();
    }
}

class Right<A> {
    constructor(private value: A) {}
}

export {};
