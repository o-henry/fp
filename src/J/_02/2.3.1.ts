const multiplier = (a: number, b: number): number => a * b;

/**
 *
 * @param {*} a parameter
 * @param {*} b parameter
 * @param {*} operation function
 * @returns
 */
function applyOperation(
    a: number,
    b: number,
    operation: (a: number, b: number) => number
) {
    return operation(a, b);
}

applyOperation(2, 3, multiplier); // 6

export { applyOperation, multiplier };
