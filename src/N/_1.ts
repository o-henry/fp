type USD = number;
type EUR = number;

const amount: USD = 1;

declare function change(usd: USD): EUR;
declare function save_amount(eur: EUR): void;

save_amount(change(amount));
save_amount(amount);

export {};
