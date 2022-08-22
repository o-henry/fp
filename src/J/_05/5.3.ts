import { Nothing } from "immer/dist/internal";
import * as R from "ramda";
import { Wrapper } from "./5.2";

/**
 * monad
 * 컨테이너 안으로 값을 리프팅하고 어떤 규칙을 정해 통제한다는 생각으로 자료형을 생성하는 것이 모나드다.
 */
/**
 * ssn으로 학생 레코드를 찾아 주소 속성을 얻는 코드
 * a. DB에 query를 날려 찾는다.
 */

class Empty<T> {
    map(f: Nothing) {
        return this;
    }

    // fmap :: (A -> B) -> Wrapper[A] -> Wrapper[B]
    fmap(_: (A: T) => Empty<T>) {
        return new Empty();
    }

    to_string() {
        return "Empty ()";
    }
}

const empty = () => new Empty();
const wrap = (val: number) => new Wrapper(val);
const is_even = (n: number) => Number.isFinite(n) && n % 2 == 0;
const half = (val: number) => (is_even(val) ? wrap(val / 2) : empty());

half(4); // Wrapper(2)
half(3); // Empty

export {};
