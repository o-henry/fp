/**
 *  branded type = opaque type = nominal type
 *  https://dev.to/andersonjoseph/typescript-tip-safer-functions-with-branded-types-14o4
 *  https://medium.com/@KevinBGreene/surviving-the-typescript-ecosystem-branding-and-type-tagging-6cf6e516523d
 * */

export interface Post {
    id: number;
    title: string;
}

export function getPosts(page: number): Post[] {
    /** @TODO perform ... */

    // 2
    if (page < 0) throw Error("Page must be a positive number");

    return [];
}

// 1
const post = getPosts(-1); // incorrect input :  negative number

type PositiveNumber = number; // Although it makes our code more readable, using a simple alias doesn't solve the problem.

export {};
