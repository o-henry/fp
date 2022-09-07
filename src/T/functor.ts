import { pipe } from "fp-ts/lib/function";
import { Functor1 } from "fp-ts/lib/Functor";
import { match, Option, some, none } from "fp-ts/Option";
import { IO } from "fp-ts/IO";

function log(message: string): void {
    console.log(message);
}

type DSL = {};
function _log(message: string): DSL {
    return {
        type: "log",
        message,
    };
}

interface Response<A> {
    url: string;
    status: number;
    headers: Record<string, string>;
    body: A;
}

const _map =
    <A, B>(f: (a: A) => B) =>
    (fa: Response<A>): Response<B> => ({
        ...fa,
        body: f(fa.body),
    });

/** flow :: ((a: A) -> B, (b: B) -> C) -> (a: A) -> C  */
export function flow<A, B, C>(f: (a: A) => B, g: (b: B) => C): (a: A) => C {
    return (a) => g(f(a));
}

/**
 * F = map = Functor = ReadonlyArray
 * @param g :: (b: B) -> C
 * @param fb :: F<B> -> F<C>
 * @returns map :: (b: F<B>) -> F<C>
 */
export const map =
    <B, C>(g: (b: B) => C) =>
    (fb: ReadonlyArray<B>): ReadonlyArray<C> =>
        fb.map(g);

// -------------------
// usage example
// -------------------
export interface User {
    readonly id: number;
    readonly name: string;
    readonly followers: ReadonlyArray<User>; // followers: [{id: 1, name:"", followers: []}]
}

/**
 * g :: (a: U) -> ReadonlyArray<U>
 */
export const get_followers = (user: User): ReadonlyArray<User> =>
    user.followers;

/**
 * f :: (a: U) -> String
 */
export const get_name = (user: User): string => user.name;

/** User -> ReadonlyArray<string> */
export const _get_followers_name = flow(get_followers, map(get_name));

export const get_follwers_name = (user: User) =>
    pipe(user, get_followers, map(get_name));

/**
 *  F = Option
 */

const __map = <B, C>(g: (b: B) => C): ((fb: Option<B>) => Option<C>) =>
    match(
        () => none,
        (b) => {
            const c = g(b);
            return some(c);
        }
    );

export {};
