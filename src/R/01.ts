import { compose, filter, map } from "rambda";

const result = compose(
    map((x: number) => x * 2),
    filter((x: number) => x > 2)
)([1, 2, 3, 4]); // [6, 8]

export {};
