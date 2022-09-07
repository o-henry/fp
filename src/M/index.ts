interface Street {
    num: number;
    name: string;
}

interface Address {
    city: string;
    street: Street;
}

interface Company {
    name: string;
    address: Address;
}

interface Employee {
    name: string;
    company: Company;
}

const employee: Employee = {
    name: "john",
    company: {
        name: "awesome inc",
        address: {
            city: "london",
            street: {
                num: 23,
                name: "high street",
            },
        },
    },
};

const capitalize = (s: string): string =>
    s.substring(0, 1).toUpperCase() + s.substring(1);

const employee_2 = {
    ...employee,
    company: {
        ...employee.company,
        address: {
            ...employee.company.address,
            street: {
                ...employee.company.address.street,
                name: capitalize(employee.company.address.street.name),
            },
        },
    },
};

import { Lens } from "monocle-ts";

const company = Lens.fromProp<Employee>()("company");
const address = Lens.fromProp<Company>()("address");
const street = Lens.fromProp<Address>()("street");
const name = Lens.fromProp<Street>()("name");

company.compose(address).compose(street).compose(name).modify(capitalize)(
    employee
);

export {};
