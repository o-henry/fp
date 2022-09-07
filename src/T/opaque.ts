import { Option, none, some } from "fp-ts/Option";

type UserName = string & { _: typeof UserName };

declare const UserName: unique symbol;

// let not_user_name: UserName = "Hello, world!";
let user_name: Option<UserName> = createUserName({ name: "henry" });

function createUserName({ name }: { name: string }): Option<UserName> {
    return /^[a-zA-Z0-9_-]+$/.test(name) ? some(name as UserName) : none;
}

export {};
