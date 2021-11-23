export const showCurrencies = (object: any) => {
  const arr = [];
  for (const key in object) {
    const element = object[key];
    arr.push(element.name);
  }
  return arr;
};

export const showLanguages = (object: any) => {
  const arr = [];
  for (const key in object) {
    const element = object[key];
    arr.push(element);
  }
  return arr;
};

export const showItems = (array: Array<string>) => {
  return array !== undefined
    ? array.map((item) => {
        let str = "";
        if (array.indexOf(item) !== array.length - 1) {
          return str + item + ", ";
        } else {
          return str + item;
        }
      })
    : "";
};

export const numberWithCommas = (x: number) => {
  return x ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0;
};
