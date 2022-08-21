import { TipCalculator } from "./02.10";

describe("Testing pure function", () => {
    it("should_return_5", () => {
        const group = ["Alice", "Bob", "Charlie"];
        expect(TipCalculator.get_tip_percentage(group)).toBe(10);
    });
});

export {};
