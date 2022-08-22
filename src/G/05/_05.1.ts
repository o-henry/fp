type book = {
    title: string;
    authros: string[];
};

type book_companion_obj = {
    from(title: book["title"], authros: book["authros"]): book;
};

const Book: book_companion_obj = {
    from(title: string, authros: string[]): book {
        return { title, authros };
    },
};

let books: book[] = [
    Book.from("FP in Scala", ["Chiusano", "Bjarnason"]),
    Book.from("The Hobbit", ["Tolkien"]),
];

export {};
