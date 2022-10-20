import { pipe } from "fp-ts/lib/function";

/** failure */
export interface Left<E> {
    readonly _tag: "Left";
    readonly left: E;
}

/** success */
export interface Right<A> {
    readonly _tag: "Right";
    readonly right: A;
}

export type Either<E, A> = Left<E> | Right<A>;

export const left = <E, A>(left: E): Either<E, A> => ({ _tag: "Left", left });
export const right = <E, A>(right: A): Either<E, A> => ({
    _tag: "Right",
    right,
});
export const match =
    <E, R, A>(onLeft: (left: E) => R, onRight: (right: A) => R) =>
    (fa: Either<E, A>): R => {
        switch (fa._tag) {
            case "Left":
                return onLeft(fa.left);
            case "Right":
                return onRight(fa.right);
        }
    };

// signature
declare function readFile(
    path: string,
    callback: (err?: Error, data?: string) => void
): void;

readFile("./any_file", (err, data) => {
    let message: string;
    /* we have to check the value(err, data) is undefiend or null */
    if (err != undefined) {
        message = `Error ${err.message}`;
    } else if (data != undefined) {
        message = `Data ${data.trim()}`;
    } else {
        message = "The impossible happended";
    }

    console.log(message);
});

// signature readFile :: (path, cb) -> void
declare function _readFile(
    path: string,
    callback: (result: Either<Error, string>) => void
): void;

_readFile("./any_file", (res) => {
    pipe(
        res,
        match(
            (err) => `Error: ${err.message}`,
            (data) => `Data: ${data.trim()}`
        ),
        console.log
    );
});
