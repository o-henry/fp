/** product-type */
type TrumpRank =
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | "Jack"
    | "Queen"
    | "King";

type TrumpSuit = "♠" | "✤" | "◆" | "♥";

type TrumpCard = {
    suit: TrumpSuit;
    rank: TrumpRank;
};

export {};
