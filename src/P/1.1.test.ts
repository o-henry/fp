describe("pure function", () => {
    it("impure add", () => {
        let data = 0;
        const add = (a: number, b: number): number => a + b + data;

        expect(add(1, 2)).toEqual(3);
        expect(add(1, 2)).toEqual(3);
        expect(add(1, 2)).toEqual(3);

        data = 1; // side-effect
        expect(add(1, 2)).toEqual(4);
    });

    it("pure add", () => {
        const add_pure = (a: number, b: number): number => a + b;
        let data = 0;
        expect(add_pure(1, 2)).toEqual(3);
        expect(add_pure(1, 2)).toEqual(3);

        data = 5;
        expect(add_pure(1, 2)).toEqual(3);
        expect(add_pure(1, 2)).toEqual(3);
        expect(add_pure(1, 2)).toEqual(3);
    });

    it("impure cow", () => {
        let friend = "🐮";

        const is_cow = (): boolean => {
            if (friend === "🐮") {
                return true;
            } else {
                return false;
            }
        };

        expect(is_cow()).toBeTruthy();
        expect(is_cow()).toBeTruthy();
        expect(is_cow()).toBeTruthy();

        friend = "🐔";

        expect(is_cow()).toBeFalsy();
        expect(is_cow()).toBeFalsy();
        expect(is_cow()).toBeFalsy();
    });

    it("pure cow", () => {
        let friend = "🐮";

        const is_cow_pure = (friend: string) => {
            if (friend === "🐮") {
                return true;
            } else {
                return false;
            }
        };

        expect(is_cow_pure("🐮")).toBeTruthy();
        friend = "🐔";
        expect(is_cow_pure("🐮")).toBeTruthy();
        expect(is_cow_pure("🐔")).toBeFalsy();
    });

    it("impure happybithday", () => {
        let person = { age: 18 };

        // 파라미터로 인자로 넘겨 사이드 이펙트를 막으려 했으나 객체의 가변성으로 인해 함수 호출 시마다 값이 바뀌는 문제가 발생
        const have_birthday = (person: { age: number }) => {
            person.age += 1;
            return person;
        };

        expect(person.age).toBe(18);
        expect(have_birthday(person).age).toBe(19);
        expect(person.age).toBe(19);
    });

    it("pure happybirthday", () => {
        let person = { age: 18 };

        const have_birthday_pure = (person: { age: number }) => {
            const clone = { ...person, age: person.age + 1 };
            return clone;
        };

        expect(person.age).toBe(18);
        expect(have_birthday_pure(person).age).toBe(19);
        expect(person.age).toBe(18);
        expect(have_birthday_pure(person).age).toBe(19);
        expect(person.age).toBe(18);
        expect(have_birthday_pure(person).age).toBe(19);
    });
});

export {};
