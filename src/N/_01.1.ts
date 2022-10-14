import { Post } from "./_01";

/** Branded Type */
type PositiveNumber = number & { __type: "PositiveNumber" };

function getPosts(page: PositiveNumber): Post[] {
    return [];
}

// const posts = getPosts(-1); // ^^^ Argument of type 'number' is not assignable to parameter of type 'PositiveNumber'.

const _posts = getPosts(2 as PositiveNumber);

// Now, what if we have a variable that we can't tell if it's a positive number or not?
function assertsPositiveNumber(value: number): asserts value is PositiveNumber {
    if (value < 0) throw new Error("Value must be a positive number");
}

assertsPositiveNumber(23);

export {};
