/** https://velog.io/@vlwkaos/Structural-vs-Nominal-Subtyping-%EA%B7%B8%EB%A6%AC%EA%B3%A0-TypeScript */
describe("Branded Type Test", () => {
    it("should validate input", () => {
        type ValidatedInputString = string & {
            __brand: "User Input Post Validation";
        };

        const validateUserInput = (input: string) => {
            const simpleValidatedInput = input.replace(/\</g, "<=");
            return simpleValidatedInput as ValidatedInputString;
        };

        const printName = (name: ValidatedInputString) => {
            console.log(name);
        };

        const input = "\n<script>alert('bobby tables')</script>";
        const validated = validateUserInput(input);
        printName(validated);
        // printName(input);
    });
});
export {};
