/**
 * semi group 은 두 개 이상의 값을 결합하는 레시피다.
 */

interface Magma<A> {
    readonly concat: (first: A, second: A) => A;
}

export {};
