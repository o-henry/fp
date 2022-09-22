/**
 * https://dev.to/gcanti/functional-design-smart-constructors-14nb
 * SMART-CONSTRUCTOR
 */
import { Option, none, some } from "fp-ts/Option";

interface Person {
    name: string;
    age: number;
}

function person(name: string, age: number): Person {
    return { name, age };
}

const p = person("", -1.2); // no error

interface NonEmptyStringBrand {
    readonly NonEmptyString: unique symbol;
}

type NonEmptyString = string & NonEmptyStringBrand;

// runtime check implemented as a custom type guard
function isNonEmptyString(s: string): s is NonEmptyString {
    return s.length > 0;
}

export function makeNonEmptyString(s: string): Option<NonEmptyString> {
    return isNonEmptyString(s) ? some(s) : none;
}

interface IntBrand {
    readonly Int: unique symbol;
}

type Int = number & IntBrand;

function isInt(n: number): n is Int {
    return Number.isInteger(n) && n >= 0;
}

function makeInt(n: number): Option<Int> {
    return isInt(n) ? some(n) : none;
}

function _person(name: NonEmptyString, age: Int): Person {
    return { name, age };
}

// _person("", -1.2);

const goodName = makeNonEmptyString("Giulio");
const badName = makeNonEmptyString("");
const goodAge = makeInt(45);
const badAge = makeInt(-1.2);

import { option } from "fp-ts/Option";

option.chain(goodName, (name) =>
    option.map(goodAge, (age) => person(name, age))
); // some({ "name": "Giulio", "age": 45 })

option.chain(badName, (name) =>
    option.map(goodAge, (age) => person(name, age))
); // none

option.chain(goodName, (name) =>
    option.map(badAge, (age) => person(name, age))
); // none

export {};
