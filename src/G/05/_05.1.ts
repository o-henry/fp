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

export { Book };
export type { book };
