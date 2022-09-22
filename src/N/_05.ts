/**
 * https://github.com/Microsoft/TypeScript/issues/202
 * https://github.com/microsoft/TypeScript/pull/33290
 * https://github.com/microsoft/TypeScript/pull/33038
 */

declare const isInteger: unique symbol;
declare const isFinite: unique symbol;
export type finite = number & { readonly [isFinite]: true };
export type integer = finite & { readonly [isInteger]: true };

export const numberIsFinite = (n: unknown): n is finite =>
    typeof n === "number" && Number.isFinite(n);
export const numberIsInteger = (n: unknown): n is integer =>
    typeof n === "number" && Number.isInteger(n);

export {};
