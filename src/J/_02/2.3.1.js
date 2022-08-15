const multiplier = (a, b) => a * b;

/**
 *
 * @param {*} a parameter
 * @param {*} b parameter
 * @param {*} operation function
 * @returns
 */
function applyOperation(a, b, operation) {
    return operation(a, b);
}

applyOperation(2, 3, multiplier); // 6

function add(a) {
    return function (b) {
        return a + b;
        1;
    };
}

add(3)(3); // 6

function printPeopleInTheUs(people) {
    for (let i = 0; i < people.length; i++) {
        let this_person = people[i];
        if (this_person.address.country === "US") {
            console.log(this_person);
        }
    }
}
printPeopleInTheUs([p1, p2, p3]);

function printPeople(people, action) {
    for (let i = 0; i < people.length; i++) {
        action(peope[i]);
    }
}

function action(person) {
    if (person.address.country === "US") {
        console.log(`This person live in US`);
    }
    // ...
}

function print_people(people, selector, printer) {
    people.forEach((person) => (selector(person) ? printer(person) : ""));
}

const inUs = (person) => person.address.country === "US";
print_people(people, inUs, console.log);
