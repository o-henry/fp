import * as _ from "lodash";

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
 * tap :: (a -> *) -> a -> a
 */
const debug = _.partial(logger, "console", "basic", "DEBUG");
