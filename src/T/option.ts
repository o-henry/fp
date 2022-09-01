// f': X ⟶ Option(Y)
interface None {
    readonly _tag: "None";
}

interface Some<A> {
    readonly _tag: "Some";
    readonly value: A;
}

type Option<A> = None | Some<A>;

const none: Option<never> = { _tag: "None" };
const some = <A>(value: A): Option<A> => ({ _tag: "Some", value });
const match =
    <R, A>(onNone: () => R, onSome: (a: A) => R) =>
    (fa: Option<A>): R => {
        switch (fa._tag) {
            case "None":
                return onNone();
            case "Some":
                return onSome(fa.value);
        }
    };

export { some, none, match };
export type { Option };
