import _ from "lodash";

/* coding imperatively */
class RE_ShoppingCart {
    /* collection need to return to copy · state */
    private items: string[] = [];

    public add_item(item: string): void {
        this.items.push(item); /* need to return new(copy) collections */
    }

    public get_discount_percentage(): number {
        /* avoid to use if/else statement */
        return _.includes(this.items, "Book") ? 5 : 0;
    }

    public get_item(): string[] {
        return this.items.slice(); /* returning a copy of the array */
    }

    public remove_item(item: string): void {
        _.remove(this.items, item);
    }
}

export { RE_ShoppingCart };
