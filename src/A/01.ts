import * as R from "ramda";

R.forEach((value) => console.log(value), []);

const water = (temperature: number) =>
    R.cond([[R.equals(0), R.always("water freezes at 0֯ ֯C")]]);
