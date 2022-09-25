import numberConverter from "../utils/ConverterFunction";

test("convert 12 to twelve", () => {
  expect(numberConverter(12)).toEqual("twelve ");
});

test("convert 99 to ninety nine", () => {
  expect(numberConverter(99)).toEqual("ninety - nine ");
});

test("convert 3542 to three thousand five hundred and forty two", () => {
  expect(numberConverter(3542)).toEqual('three  thousand five  hundred and forty - two ');
})

test("convert 1000000 to one million", () => {
  expect(numberConverter(1000000)).toEqual('one million');
})

test("convert 10.000.000", () => {
  expect(numberConverter(10000000)).toEqual('Too big number');
});

test("convert 0", () => {
  expect(numberConverter(0)).toEqual('zero')
})