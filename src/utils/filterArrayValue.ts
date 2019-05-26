import * as R from "ramda";

export const filterArrayValue = (
  data: any[][],
  val: string | string[]
): any[][] => R.filter(R.where([R.contains(`${val}`)]), data);

export const filterArrayValueByArray = (data: any[][], arr: string[]) =>
  R.map(val => R.flatten(filterArrayValue(data, val)), arr);
