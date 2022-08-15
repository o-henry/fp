import { Person } from "../_02/2.1";
import { Address } from "../_02/2.1.2";
var _ = require("lodash");

var p1 = new Person("111-11-1111", "Haskell", "Curry", 1900, new Address("US"));
var p2 = new Person(
    "222-22-2222",
    "Barkley",
    "Rosser",
    1907,
    new Address("Greece")
);
var p3 = new Person(
    "333-33-3333",
    "John",
    "von Neumann",
    1903,
    new Address("Hungary")
);
var p4 = new Person("444-44-4444", "Alonzo", "Church", 1903, new Address("US"));

const name = (p) => p.fullname;
console.log(name(p1)); // Haskell Curry

/**
 * 3.3.2
 * TODO: extract name from student lists
 */
let result = [];
let persons = [p1, p2, p3, p4];

_.map(persons, (s) => (s !== null && s !== undefined ? s.fullname : ""));

_(persons)
    .reverse()
    .map((p) => (p !== null && p !== undefined ? p.fullname : ""));
