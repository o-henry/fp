/**
 * handling error
 * mapping an operation to its container
 */

try {
    // 예외가 날 가능성 있는 코드
} catch (e) {
    // 예외 처리 구문
    console.error(e.message);
}

class Wrapper {
    constructor(value) {
        this._value = value;
    }

    // map :: (A -> B) -> A -> B
    map(f) {
        return f(this._value);
    }

    toString() {
        return "Wrapper (" + this._value + ")";
    }
}

// wrap :: A -> Wrapper(A)
const wrap = (val) => new Wrapper(val);
