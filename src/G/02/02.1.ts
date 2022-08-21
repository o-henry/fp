import _ from "lodash";
import R from "ramda";

/* coding imperatively */
class RE_ShoppingCart {
    /* collection need to return to copy · state */
    public add_item(item: string, items: string[] = []): void {
        R.clone(items);
        R.append(item, items);
    }

    public get_discount_percentage(items: string[]): number {
        /* avoid to use if/else statement */
        return _.includes(items, "Book") ? 5 : 0;
    }

    public remove_item(item: string, items: string[] = []): void {
        _.remove(items, item);
    }
}

export { RE_ShoppingCart };
