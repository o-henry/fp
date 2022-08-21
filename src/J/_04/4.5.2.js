/* composition */
import * as R from "ramda";

const str = `We can only see a short distance ahead but we can see plenty there that needs to be done`;

/* explode :: string -> string */
const explode = (str) => str.split(/\s+/);
const count = (str) => str.length;

const count_words = R.compose(count, explode);

count_words(str);

export {};
