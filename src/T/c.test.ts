/**
 * g: (b: B, c: C) => D
 * currying
 * g: (b: B) => (c: C) => D
 */

interface User {
    readonly id: number;
    readonly name: string;
    readonly followers: ReadonlyArray<User>;
}

const add_follower = (follower: User, user: User): User => ({
    ...user,
    followers: [...user.followers, follower],
});

const _add_follower = (follower: User) => (user: User) => ({
    ...user,
    followers: [...user.followers, follower],
});

const user: User = { id: 1, name: "Ruth R. Gonzalez", followers: [] };
const follower: User = { id: 3, name: "Marsha J. Joslyn", followers: [] };

console.log(_add_follower(follower)(user));

describe("currying", () => {
    it("should lazy", () => {
        console.log(_add_follower(user)(follower));
    });
});

export {};
