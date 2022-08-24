class Maybe {
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
        return this.just(a);
    }

    get is_nothing(): boolean {
        return false;
    }

    get is_just(): boolean {
        return false;
    }
}

class Just<T> extends Maybe {
    constructor(private value: T) {
        super();
    }
}

class Nothing extends Maybe {}

export {};
