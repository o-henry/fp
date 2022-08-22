/**
 * containerization
 * wrapper의 기능이 불안전한 값을 감싸는 것이라면 예외처리가 필요한 부분에 대해서 항상 wrapper를 고려하면 되는건지
 *
 * 불안전한 값(에러가 날지 모르는 값) -> Wrapping
 **/
class Wrapper<T> {
    constructor(private value: T) {
        this.value = value;
    }

    // map :: (A -> B) -> A -> B
    map(f: (A: T) => T) {
        return f(this.value);
    }

    // fmap :: (A -> B) -> Wrapper[A] -> Wrapper[B]
    fmap(f: (A: T) => Wrapper<T>) {
        return new Wrapper(f(this.value));
    }

    toString(value: T) {
        return `Wrapper (${value})`;
    }
}

export { Wrapper };

/**
 * <function-name> :: <inputs*> -> <output>
 */
