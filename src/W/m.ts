declare function fetchA(cb: (a: number) => void): void;
declare function fetchB(a: number, cb: (b: number) => void): void;
declare function fetchC(b: number, cb: (b: number) => void): void;
declare function fetchD(c: number, cb: (b: number) => void): void;

function getD(cb: (sum: number) => void): void {
    fetchA((a) => {
        fetchB(a, (b) => {
            fetchC(b, (c) => {
                fetchD(c, (d) => {
                    cb(d);
                });
            });
        });
    });
}

interface Promise<A> {
    then<B>(callback: (a: A) => B | Promise<B>): Promise<B>;
}

declare function fetchA(): Promise<number>;
declare function fetchB(a: number): Promise<number>;
declare function fetchC(b: number): Promise<number>;
declare function fetchD(c: number): Promise<number>;

function _getD(): Promise<number> {
    return fetchA()
        .then((a) => fetchB(a))
        .then((b) => fetchC(b))
        .then((c) => fetchD(c));
}

// async function __getD(): Promise<number> {
//     const a = await fetchA();
//     const b = await fetchB(a);
//     const c = await fetchC(b);
//     return await fetchD(c);
// }

fetchA().then(fetchB).then(fetchC).then(fetchD);

type Monad<A> = Promise<A>;

function of<A>(a: A): Monad<A> {
    return Promise.resolve(a);
}
function flatMap<A, B>(monad: Monad<A>, cb: (a: A) => Monad<B>): Monad<B> {
    return monad.then(cb);
}

export {};
