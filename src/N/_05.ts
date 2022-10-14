// wrong fail
type Age = number & { readonly __brand: "positive_age" };
const validate_age = (n: number) => n > 0 && n < 120;

function person(name: string, age: Age): Person {
    return { name, age };
}

let age = validate_age(99);
let age2 = validate_age(130);
let age4 = validate_age(-30);

console.log(`Person : ${person("henry", age2)}`);

interface Person {
    name: string;
    age: Age;
}

export {};
