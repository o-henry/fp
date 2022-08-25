/**
 * containerization
 * 값을 컨테이너화 하는 행위는 FP의 기본 디자인 패턴이다.
 * 값에 대한 직접적인 접근을 차단함으로써 값을 안전하게 다루고 불변성을 유지할 수 있다.
 **/
class W<T> {
    constructor(private value: T) {
        this.value = value;
    }

    // map :: (A -> B) -> A -> B
    /**
     * map이 반환하는 타입인 B를 먼저 추상화 하고(U)
     * (A -> B) -> A 함수의 경우 T -> U로 변환되는 과정을 표현하고
     */
    map<U>(f: (A: T) => U): U {
        return <U>f(this.value);
    }

    // fmap :: (A -> B) -> W[A] -> W[B]
    fmap<U>(f: (A: T) => U): W<U> {
        return new W<U>(f(this.value));
    }

    toString() {
        return `W (${this.value})`;
    }
}

export { W };

/**
 * <function-name> :: <inputs*> -> <output>
 */
