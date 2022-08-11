"use strict";
class Person {
    constructor(firstname, lastname, ssn) {
        this._firstname = firstname;
        this._lastname = lastname;
        this._ssn = ssn;
        this._address = null;
        this._birthYear = null;
    }

    get ssn() {
        return this._ssn;
    }

    get firstname() {
        return this._firstname;
    }

    get lastname() {
        return this._lastname;
    }

    get address() {
        return this._address;
    }

    get birthYear() {
        return this._birthYear;
    }

    set birthYear(year) {
        this._birthYear = year;
    }

    set address(addr) {
        this._address = addr;
    }

    toString() {
        return `Person(${this._firstname}, ${this._lastname})`;
    }

    get fullname() {
        return [this._firstname, this._lastname].join(" ");
    }

    peopleInSomeCountry(friends) {
        let result = [];
        for (let idx in friends) {
            let friend = friends[idx];
            if (this.address.country === friend.address.country) {
                result.push(friend);
            }
        }

        return result;
    }
}

var fullname = (person) => [person.firstname, person.lastname].join(" ");

class Student extends Person {
    constructor(firstname, lastname, ssn, school) {
        super(firstname, lastname, ssn);
        this._school = school;
    }
    get school() {
        return this._school;
    }

    studentInSameCountryAndSchool(friends) {
        let closeFriends = super.peopleInSomeCountry(friends);
        let result = [];
        for (let idx in closeFriends) {
            let friend = closeFriends[idx];
            if (friend.school === this.school) {
                result.push(friend);
            }
        }
        return result;
    }
}

const curry = new Student("Haskell", "Curry", "111-11-1111", "Penn State");
const turing = new Student("Alan", "Turing", "222-22-2222", "Princeton");
