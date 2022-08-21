import * as _ from "lodash";
import * as R from "ramda";
/**
 * function combinator
 * if-else 나 for 같은 절차적 흐름 통제를 함수형을 통해 표현하는 방법
 */

/**
 * identity 항등 (i-combinator)
 * identity :: (a) -> a
 */

/**
 * tap (K-combinator)
 * void type (logging · write file/html page)
 * tap :: (a -> *) -> a -> a
 */
const debug_log = _.partial(logger, "console", "basic", "DEBUG");
const debug = R.tap(debug_log);

const clear_input = R.pipe(R.trim, debug);

const alt = R.curry((fun1, fun2, val) => fun1(val) || fun2(val));

const show_student = R.pipe(
    alt(find_student, create_new_student),
    csv,
    append("#student-info")
);

/**
 * seq (S-combinator)
 */
