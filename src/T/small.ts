import { pipe } from "fp-ts/lib/function";
import { chain, IO } from "fp-ts/lib/IO";
import * as fs from "fs";

const read_file =
    (filename: string): IO<string> =>
    () =>
        fs.readFileSync(filename, "utf-8");

const write_file =
    (filename: string, data: string): IO<void> =>
    () =>
        fs.writeFileSync(filename, data, { encoding: "utf-8" });

const modify_file = (filename: string, f: (s: string) => string): IO<void> =>
    pipe(
        read_file(filename),
        chain((s) => write_file(filename, f(s)))
    );

export {};
