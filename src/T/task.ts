import { flow } from "fp-ts/lib/function";
import { Task } from "fp-ts/Task";

const map =
    <B, C>(g: (b: B) => C) =>
    (fb: Task<B>): Task<C> =>
    () => {
        const promise = fb();
        return promise.then(g);
    };

interface User {
    readonly id: number;
    readonly name: string;
}

const database: Record<number, User> = {
    1: { id: 1, name: "Ruth R. Gonzalez" },
};

const getUser =
    (id: number): Task<User> =>
    () =>
        Promise.resolve(database[id]);
const getName = (user: User): string => user.name;

// getUserName: number -> Task<string>
const getUserName = flow(getUser, map(getName));

getUserName(1)().then(console.log); // => Ruth R. Gonzalez
export {};
