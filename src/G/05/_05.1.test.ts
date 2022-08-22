import { book, Book } from "./_05.1";

describe("🚀 sequential programs", () => {
    it("test_map_filter ", () => {
        let books: book[] = [
            Book.from("FP in Scala", ["Chiusano", "Bjarnason"]),
            Book.from("The Hobbit", ["Tolkien"]),
        ];

        expect(
            /* signature :: List[Book] -> Number */
            books
                .map((x) => x.title) /* List[Book] -> List[String]  */
                .filter((x) => x.includes("Scala")) /* List[String] -> String */
                .length /* String -> Number */
        ).toBe(1);
    });
});
