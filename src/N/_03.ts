/**
 * https://michalzalecki.com/nominal-typing-in-typescript/
 * https://github.com/Microsoft/TypeScript/issues/202
 * https://medium.com/@KevinBGreene/surviving-the-typescript-ecosystem-branding-and-type-tagging-6cf6e516523d
 * */

type Brand<K, T> = K & { readonly __brand: T };

type USD = Brand<number, "USD">;
type EUR = Brand<number, "EUR">;

const usd = 10 as USD;
const eur = 10 as EUR;

function euroToUsd(euro: EUR): USD {
    return (euro * 1.18) as USD;
}

console.log(`USD: ${euroToUsd(eur)}`);

export {};
