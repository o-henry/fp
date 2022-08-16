describe("pure function", () => {
    it("slice", () => {
        const xs = [1, 2, 3, 4, 5];
        expect(xs.slice(0, 3)).toStrictEqual([1, 2, 3]);
    });
});
