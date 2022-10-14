import { option } from "fp-ts";
import { Option, none, some } from "fp-ts/Option";

export interface NonEmptyStringBrand {
    readonly NonEmptyString: unique symbol; // ensure uniqueness across modules / packages
}

export type NonEmptyString = string & NonEmptyStringBrand; // intersected with a unique brand

function isNonEmptyString(s: string): s is NonEmptyString {
    return s.length > 0;
}

export function makeNonEmptyString(s: string): Option<NonEmptyString> {
    return isNonEmptyString(s) ? some(s) : none;
}

export interface IntBrand {
    readonly Int: unique symbol;
}

export type Int = number & IntBrand;

function isInt(n: number): n is Int {
    return Number.isInteger(n) && n >= 0;
}

export function makeInt(n: number): Option<Int> {
    return isInt(n) ? some(n) : none;
}

interface Person {
    name: NonEmptyString;
    age: Int;
}

function person(name: NonEmptyString, age: Int): Person {
    return { name, age };
}

// person("", -1.2); // error
const good_name = makeNonEmptyString("Henry");
const bad_name = makeNonEmptyString("");
const good_age = makeInt(45);
const bad_age = makeInt(-1.2);

// option.chain(good_name, name => option.map(good_age, age => person(name, age) ))
