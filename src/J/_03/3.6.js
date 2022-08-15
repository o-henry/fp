let names = [
    "alonzo church",
    "Haskell curry",
    "stephen_kleene",
    "John Von Neumann",
    "stephen_kleene",
];

_.chain(names)
    .filter(is_valid)
    .map((s) => s.replace(/_/, ""))
    .uniq()
    .map(_.startCase)
    .sort()
    .value();
