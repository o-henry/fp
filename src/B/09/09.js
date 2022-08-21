function to_celsius(kelvin) {
    const celsius = kelvin - 273.15;
    return Math.round(celsius * 100) / 100;
}

function describe_temperature(temperature) {
    return temperature < 0
        ? "Freezing"
        : temperature < 15
        ? "Cold"
        : temperature < 28
        ? "Warm"
        : "Hot";
}

/* 하나의 값으로 2가지 리턴을 하는 코드 */
const kelvin = 300;
const celsius = to_celsius(kelvin); // 26.85
const description = describe_temperature(celsius); // "Warm"

/* 위와 같은 코드를 파이프라인으로 연결할 수 있다. */
function F(value) {
    // map :: (A -> B) -> A -> B
    function map(f) {
        const new_value = f(value);
        return F(new_value);
    }

    return {
        map,
    };
}

function identity(n) {
    return n;
}

export {};
