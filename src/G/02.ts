import _ from "lodash";

/* coding imperatively */
class ShoppingCart {
    /* collection need to return to copy · state */
    private items: string[] = [];
    private book_added: boolean = false; /* flag(state) */

    public add_item(item: string): void {
        this.items.push(item); /* need to return new(copy) collections */
        if (item === "Book") {
            this.book_added = true;
        }
    }

    public get_discount_percentage(): number {
        /* 수학적 함수는 하나의 인풋에 하나의 아웃풋을 반환한다. */
        if (this.book_added) {
            return 5;
        } else {
            return 0;
        }
    }

    public get_item(): string[] {
        return this.items;
    }

    public get_book_added_status(): boolean {
        return this.book_added;
    }

    public remove_item(item: string): void {
        _.remove(this.items, item);

        if (_.isEqual(item, "Book")) {
            this.book_added = false;
        }
    }
}

export { ShoppingCart };
