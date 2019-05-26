import * as R from "ramda";

export const filterArrayValue = (data: any[][], val: string): any[][] =>
  R.filter(R.where([R.contains(val)]), data);
