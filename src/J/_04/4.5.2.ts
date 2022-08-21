/* composition */
import * as R from "ramda";
import * as _ from "lodash";

const str = `We can only see a short distance ahead but we can see plenty there that needs to be done`;

/* explode :: String -> String[] */
const explode = (str: string): string[] => str.split(/\s+/);
// count :: String[] -> Number
const count = (str: string[]) => str.length;

// g :: A -> B
// f :: B -> C
const count_words = R.compose(count, explode); // f∙g = f(g) = compose :: ((B -> C), (A -> B)) -> (A -> C)

count_words(str);

const trim = (str: string): string => str.replace(/^\s*|\s*$/g, "");
const normalize = (str: string): string => str.replace(/\-/g, "");
const valid_length = (param: number, str: string): boolean =>
    str.length === param;
const check_length_ssn = _.partial(valid_length, 9);

const clear_input = R.compose(normalize, trim);
const is_valid_ssn = R.compose(check_length_ssn, clear_input);

export {};
