import { struct } from "fp-ts";

interface Eq<A> {
    /** retrun `true` if `x` is equal to `y` */
    readonly equals: (x: A, y: A) => boolean;
}

const eq_number: Eq<number> = {
    equals: (x, y) => x === y,
};

function elem<A>(E: Eq<A>): (a: A, as: Array<A>) => boolean {
    return (a, as) => as.some((item) => E.equals(item, a));
}

export {};
