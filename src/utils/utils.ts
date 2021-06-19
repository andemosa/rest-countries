import { Params } from "../App";

export const showItems = (array: Array<Params>) => {
  return array !== undefined
    ? array.map((item) => {
        let str = "";
        if (array.indexOf(item) !== array.length - 1) {
          return str + item.name + ", ";
        } else {
          return str + item.name;
        }
      })
    : "";
};

export const numberWithCommas = (x: number) => {
  return x ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0;
};
