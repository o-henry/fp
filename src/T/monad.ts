import { pipe } from "fp-ts/lib/function";
import * as A from "fp-ts/ReadonlyArray";

interface User {
    readonly id: number;
    readonly name: string;
    readonly followers: ReadonlyArray<User>;
}

const get_followers = (user: User): ReadonlyArray<User> => user.followers;
declare const user: User;

/** f :: T -> F<F<T>> we need to flatten */
const followers_of_followers = pipe(user, get_followers, A.map(get_followers));

declare const _flatten: <A>(
    mma: ReadonlyArray<ReadonlyArray<A>>
) => ReadonlyArray<A>;

const _followers_of_followers = pipe(
    user,
    get_followers,
    A.map(get_followers),
    A.flatten
);

export type { User };
