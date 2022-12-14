/**
 * Option type
 * return a type A (Some<A>) or fail (None)
 */

interface None {
    readonly _tag: "None";
}

interface Some<A> {
    readonly _tag: "Some";
    readonly value: A;
}

type Option<A> = None | Some<A>;

export {};
