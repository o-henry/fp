/** Opaque Branded Nominal type */
import { Option, none, some } from "fp-ts/Option";

declare const UserName: unique symbol;
type UserName = string & { _: typeof UserName };
function createUserName({ name }: { name: string }): Option<UserName> {
    return /^[a-zA-Z0-9_-]+$/.test(name) ? some(name as UserName) : none;
}

let user_name: Option<UserName> = createUserName({ name: "henry" });
// let not_user_name: UserName = "Hello, world!"; // <- Error!

declare const Int: unique symbol;
type Int = number & { _: typeof Int };
export const isInt = (n: number): n is Int => Number.isInteger(n) && n >= 0; // reusable
const makeInt = (n: number): Option<Int> => (isInt(n) ? some(n) : none);
// let user_age: Int = makeInt(32); // <- Error!

class User {
    /* ... */
    private constructor(private username: UserName, private age: Int) {
        this.username = username;
        this.age = age;
    }

    // static create(username: string, age: Int): User {}

    createUserName(name: string): Option<UserName> {
        return /^[a-zA-Z0-9_-]+$/.test(name) ? some(name as UserName) : none;
    }
}

export {};
