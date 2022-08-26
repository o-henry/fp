import { pipe } from "fp-ts/lib/function";

const f = (s: string): number => s.length;
const g = (n: number): boolean => n > 2;

const gf = (s: string): boolean => g(f(s));

/**
 * F = map = Functor
 * @param g :: (b: B) -> C
 * @param fb :: F<B> -> F<C>
 * @returns map :: (b: F<B>) -> F<C>
 */
const map =
    <B, C>(g: (b: B) => C) =>
    (fb: ReadonlyArray<B>): ReadonlyArray<C> =>
        fb.map(g);

interface User {
    readonly id: number;
    readonly name: string;
    readonly followers: ReadonlyArray<User>;
}

/**
 * g :: (a: U) -> ReadonlyArray<U>
 */
const get_followers = (user: User): ReadonlyArray<User> => user.followers;

/**
 * f :: (a: U) -> String
 */
const get_name = (user: User): string => user.name;

const get_follwers_name = (user: User) =>
    pipe(user, get_followers, map(get_name));

const user: User = {
    id: 1,
    name: "Ruth R. Gonzalez",
    followers: [
        { id: 2, name: "Terry R. Emerson", followers: [] },
        { id: 3, name: "Marsha J. Joslyn", followers: [] },
    ],
};

console.log(get_follwers_name(user)); // => [ 'Terry R. Emerson', 'Marsha J. Joslyn' ]

export {};
