import _ from "lodash";

/* coding imperatively */
class RE_ShoppingCart {
    /* collection need to return to copy · state */
    private items: string[] = [];

    public add_item(item: string): void {
        this.items.push(item); /* need to return new(copy) collections */
    }

    public get_discount_percentage(): number {
        /* 수학적 함수는 하나의 인풋에 하나의 아웃풋을 반환한다. */
        const has_book: boolean = _.includes(this.items, "Book");
        if (!has_book) return 0;
        return 5;
    }

    public get_item(): string[] {
        return this.items.slice(); /* returning a copy of the array */
    }

    public remove_item(item: string): void {
        _.remove(this.items, item);
    }
}

export { RE_ShoppingCart };
