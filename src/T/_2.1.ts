import { either, task, taskEither } from "fp-ts";
import { flow, pipe } from "fp-ts/function";

/* flow·pipe : handle composition */
const add_5 = (x: number) => x + 5;
const multiply_2 = (x: number) => x * 2;

const one = multiply_2(add_5(3)); // 16
const two = pipe(3, add_5, multiply_2); // 16

const run_pipe = (x: number) => pipe(x, add_5); // 8
const run_flow = flow(add_5); // 8

console.log(run_pipe(3), run_flow(3));

/* task : handle asynchronous */
const deep_thought: task.Task<number> = () => Promise.resolve(42);
deep_thought().then((n) => {
    console.log(`The answer is ${n}`);
});

// task with fails
const fetch_greeting = taskEither.tryCatch<Error, { name: string }>(
    () => new Promise((resolve) => resolve(JSON.parse('{ "name": "Carol" }'))),
    (reason) => new Error(String(reason))
);

fetch_greeting()
    .then((e) =>
        pipe(
            e,
            either.fold(
                (err) =>
                    `I'm sorry, I don't know who you are. (${err.message})`,
                (x) => `Hello, ${x.name}`
            )
        )
    )
    .then(console.log);
