describe("chapter 2", () => {
    it("add", () => {
        function add(a: number) {
            return function (b: number) {
                return a + b;
            };
        }

        expect(add(3)(3)).toBe(6);
    });
});

export {};
