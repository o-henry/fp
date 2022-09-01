/**
 * h: (a: A) => (fb: F<B>) => F<D>
 * g: (b: B) => M<C>
 * map(g); (mb: M<B>) => M<M<C>>
 * h = flatten ◦ map(g)
 * chain(g)
 */

export {};
