import _ from "lodash";
import { ShoppingCart } from "./02";
import { RE_ShoppingCart } from "./02.1";

describe("cart", () => {
    /**
     * bad test style*
     * 테스트 나눌필요가 있으나 간단하게 하기 위해 생략
     */
    it("test_discount_percentage", () => {
        const cart = new ShoppingCart();

        cart.add_item("Apple");

        expect(cart.get_discount_percentage()).toBe(0);

        cart.add_item("Book");

        expect(cart.get_discount_percentage()).toBe(5);
    });

    /**
     * 테스트 명 자체가 API가 될 수 있도록 설계하자
     */
    it("test_discount_rate_when_a_book_is_deleted_from_the_list", () => {
        const cart = new ShoppingCart();

        cart.add_item("Lemon");
        cart.add_item("Book");
        _.remove(cart.get_item(), "Book");

        expect(
            cart.get_book_added_status()
        ).toBeTruthy(); /* it has to be Falsy */
        expect(cart.get_discount_percentage()).toBe(5); /* it has to be 0 */
    });

    it("test_discount_rate_when_delete_book_twice", () => {
        const cart = new ShoppingCart();

        cart.add_item("Lemon");
        cart.add_item("Book");
        cart.add_item("Book"); // ["Lemon", "Book", "Book"]
        cart.remove_item("Book"); // ["Lemon", "Book"]

        expect(cart.get_discount_percentage()).toBe(0); /* it has to be 5 */
    });

    it("test_discount_rate_with_more_functional_code", () => {
        const cart = new RE_ShoppingCart();

        cart.add_item("Lemon");
        cart.add_item("Book");

        expect(cart.get_discount_percentage()).toBe(5);

        cart.add_item("Book");
        cart.remove_item("Book");

        expect(cart.get_discount_percentage()).toBe(5);
    });
});

export {};
