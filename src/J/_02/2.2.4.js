import R from "ramda";
import { Person } from "./2.1";

let person = new Person("Alonzo", "Church", "777-77-7777");
let lastnameLens = R.lensProp("lastname");
const newPerson = R.set(lastnameLens, "Mouring", person);
R.view(lastnameLens, person); // "Church"

newPerson.lastname; // Mouring
person.lastname; // Church
