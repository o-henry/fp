"use strict";
exports.__esModule = true;
exports.makeInt = exports.makeNonEmptyString = void 0;
var Option_1 = require("fp-ts/Option");
function isNonEmptyString(s) {
    return s.length > 0;
}
function makeNonEmptyString(s) {
    return isNonEmptyString(s) ? (0, Option_1.some)(s) : Option_1.none;
}
exports.makeNonEmptyString = makeNonEmptyString;
function isInt(n) {
    return Number.isInteger(n) && n >= 0;
}
function makeInt(n) {
    return isInt(n) ? (0, Option_1.some)(n) : Option_1.none;
}
exports.makeInt = makeInt;
function person(name, age) {
    return { name: name, age: age };
}
// person("", -1.2); // error
var good_name = makeNonEmptyString("Henry");
var bad_name = makeNonEmptyString("");
var good_age = makeInt(45);
var bad_age = makeInt(-1.2);
console.log(bad_age);
