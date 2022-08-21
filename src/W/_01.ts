import produce, { Immutable } from "immer";

type A = {
    readonly x: number;
};
const a: A = { x: 1 };
a.x = 12; // Error: Cannot assign to 'x' because it is a read-only property.ts(2540)

type B = Immutable<
    {
        text: string;
        valid: boolean;
    }[]
>;

const b: B = [
    { text: "valid text", valid: true },

    {
        text: "invalid text",
        valid: false,
    },
];

const next_b = produce(b, (draft) => {
    draft[1].valid = false;
    draft.push({ text: "some text", valid: false });
});

export {};
