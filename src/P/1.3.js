"use strict";
const clone = (person, new_streeet_name) => ({
    ...person,
    address: {
        ...person.address,
        street_name: new_streeet_name,
    },
    phone_numbers: [...person.phone_numbers],
});

const _clone = (obj) => JSON.parse(JSON.stringify(obj));

Object.freeze(my_obj_or_arr);
