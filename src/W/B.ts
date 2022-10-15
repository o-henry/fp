// https://qiita.com/k-penguin-sato/items/0adb0d9df35d96d04b1c
declare const validPassword: unique symbol;

type Password = string & { validPassword: never };

type User = {
    name: string;
    password: Password;
};

const validatePassword = (input: string) => {
    if (input.length < 8) {
        throw new Error("パスワードは8文字以上で入力してください。");
    }

    return input as Password;
};

const user1: User = { name: "user1", password: validatePassword("12345678") };
const user2: User = { name: "user1", password: validatePassword("1234") };

const pwd: Password = validatePassword("abse");

export {};
