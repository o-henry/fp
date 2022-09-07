import { IO } from "fp-ts/IO";
import { Option, some, none } from "fp-ts/Option";
import { User, _get_followers_name } from "./functor";

export const log = (message: string): IO<void> => {
    return () => console.log(message);
};

type Task<A> = () => Promise<A>;

/** g(f(x)) */
function flow<A, B, C>(f: (a: A) => B, g: (b: B) => C): (a: A) => C {
    return (a) => g(f(a));
}

describe("🚀 Functor", () => {
    it("should_return_nothing", () => {
        const main = log("Hello!");
        console.log(main);

        console.log(main());
    });

    it("should_pure_way", () => {
        /** (a: A) => B */
        const len = (s: string): number => s.length;

        /** @GOAL : (a: A) => F<B> */
        const head = <A>(as: ReadonlyArray<A>): Option<A> =>
            as.length === 0 ? none : some(as[0]);
    });

    it("should_test_boundary_that_leads_to_functors ", () => {
        const user: User = {
            id: 1,
            name: "Ruth R. Gonzalez",
            followers: [
                { id: 2, name: "Terry R. Emerson", followers: [] },
                { id: 3, name: "Marsha J. Joslyn", followers: [] },
            ],
        };

        expect(_get_followers_name(user)).toEqual([
            "Terry R. Emerson",
            "Marsha J. Joslyn",
        ]);
    });
});
export {};
