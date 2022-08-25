import { pipe } from "fp-ts/lib/function";
import { Functor1 } from "fp-ts/lib/Functor";

interface Response<A> {
    url: string;
    status: number;
    headers: Record<string, string>;
    body: A;
}

const map =
    <A, B>(f: (a: A) => B) =>
    (fa: Response<A>): Response<B> => ({
        ...fa,
        body: f(fa.body),
    });

export {};
