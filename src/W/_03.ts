/**
 * https://svitla.com/blog/functional-programming-in-typescript
 */

type Customer = { name: string; age: number };
type Rule<T> = (x: T) => null | string;
type Rules<T> = { [K in keyof T]: Rule<T[K]> };

const ageOfMajority: Rule<number> = (x) => (x < 18 ? "Too young" : null);
const required: Rule<any> = (x) => (!x ? "Required field" : null);

const rules: Rules<Customer> = {
    name: required,
    age: ageOfMajority,
};

/**
 * refactoring
 */

import { Option, some, none } from "fp-ts/Option";

export {};
