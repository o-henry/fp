describe("THE TWO PILLARS OF FP", () => {
    it("Referential transparency", () => {
        const double = (n: number): number => n * 2;

        let x = double(2); // it is replaceable with its value so it is RT.
        let y = double(2);

        x = 4;
        expect(x).toEqual(y);
    });

    it("Non referential transparency", () => {
        const inverse = (n: number): number => {
            if (n === 0) throw new Error("cannot divide by zero");
            return 1 / n;
        };

        // const x = inverse(0) + 1; // can't replace inverse(0) with its value(Error object)
    });

    it("RT requires the immutable data", () => {
        const xs = [1, 2, 3];

        const append = (xs: Array<number>): void => {
            xs.push(4);
        };

        append(xs);

        expect(xs).toEqual([1, 2, 3, 4]);
    });
});

export {};
