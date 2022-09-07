interface Person {
    name: string;
    age: number;
}

function person(info: Person): Person {
    return info;
}

const p = person({ name: "", age: -1.2 }); // no error. we need to refinement this.

export {};
