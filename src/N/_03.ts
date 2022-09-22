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

export {};
