/**
 * IO monad
 */

class IO {
    constructor(effect) {
        if (!_.isFunction(effect)) {
            throw "IO 사용법: 함수는 필수입니다!";
        }
    }
}

export {};
