"use strict";
exports.__esModule = true;
var validate_age = function (n) {
    return n > 0 && n < 120 ? n : "Invalid Age";
};
function person(name, age) {
    return { name: name, age: age };
}
var age = validate_age(99);
var age2 = validate_age(130);
console.log("Person : ".concat(person("henry", age2)));
