import { Newtype as N, iso } from "newtype-ts";

interface EUR extends N<{ readonly EUR: unique symbol }, number> {}
const iso_EUR = iso<EUR>();

const amonut = iso_EUR.wrap(0.85);

const n = iso_EUR.unwrap(amonut); // n: number = .85

declare function save_amount(eur: EUR): void;

describe("newtype", () => {
    it("should check the new_type", () => {
        save_amount(0.85); //  Argument of type 'number' is not assignable to parameter of type 'EUR'.
    });
});
