import * as R from "ramda";

export const getTotalPowers = R.map<string[][], number[]>(
  R.compose<string, string, string, number>(
    Number,
    R.replace(",", ""),
    R.replace("FALSE", ""),
    // @ts-ignore
    R.findLast(R.pathOr("FALSE", [0]))
  )
);

export const getTotalPower = (powers: string[][]) =>
  // @ts-ignore
  R.sum(getTotalPowers(powers));
