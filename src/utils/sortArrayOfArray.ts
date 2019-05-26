import * as R from "ramda";

const toNumber = R.map(Number);

export const sortArrayOfArray = (nthArray: number, array: string[][]) =>
  R.sortBy(
    R.compose(
      // @ts-ignore
      R.propOr("0", nthArray),
      toNumber
    ),
    array
  );
