import { request } from "http";
import { RequestOptions } from "https";

describe("side effect", () => {
    const SERVER_URL = "http://www.example.com";
    it("closure and global variables", () => {
        const get_oauth_token = (
            request: Request,
            SERVER_URL: string,
            id: string,
            secret: string
        ) => {
            // request.post(`${SERVER_URL}/oauth`, { id, secret });
        };
    });

    it("handle error", () => {
        const landmine = (stepped_on_it: boolean) => {
            if (stepped_on_it) {
                // throw new Error("b00m");
            }
            return false;
        };

        const resut = landmine(false);
        expect(resut).toBeFalsy();

        const _result = landmine(true);
        // expect(_result).toThrowError();
    });
});

export {};
