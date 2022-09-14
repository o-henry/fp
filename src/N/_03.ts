/**
 * https://michalzalecki.com/nominal-typing-in-typescript/
 * https://github.com/Microsoft/TypeScript/issues/202
 * */

type Brand<K, T> = K & { readonly __brand: T };

type USD = Brand<number, "USD">;
type EUR = Brand<number, "EUR">;

const usd = 10 as USD;
const eur = 10 as EUR;

declare const currencyTag: unique symbol;
type Currency = number & { readonly [currencyTag]: true };

declare const isFinite: unique symbol;
declare const isInteger: unique symbol;

export type finite = number & { readonly [isFinite]: true };
export type integer = finite & { readonly [isInteger]: true };

export const numberIsFinite = (n: unknown): n is finite =>
    typeof n === "number" && Number.isFinite(n);
export const numberIsInteger = (n: unknown): n is integer =>
    typeof n === "number" && Number.isInteger(n);

export {};
