/* curry(f) :: ((a, b, c) -> d) -> a -> b -> c -> d */

import * as R from "ramda";

/* check_type :: Type -> Object -> Object */
const check_type = R.curry((type_def, obj) => {
    if (!R.is(type_def)) {
        let type = typeof obj;
        throw new TypeError(`형식 불일치: [${type_def}] !== [${type}]`);
    }

    return obj;
});

check_type(String)("Curry");
check_type(Number)("Haskell"); // TypeError

/* fullname :: (string, stirng) -> string */
/* fullname :: string -> string -> string */

export {};
