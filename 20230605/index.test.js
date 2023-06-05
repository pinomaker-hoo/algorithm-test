const {
  reverseArr,
  getNumber,
  getBetweenSum,
  getArray,
  convertStr,
  findNum,
} = require(".");

test("2023.06.05 1번 문제", () => {
  expect(reverseArr(12345)).toEqual([5, 4, 3, 2, 1]);
});

test("2023.06.05 2번 문제", () => {
  expect(getNumber(100)).toEqual("Even");
});

test("2023.06.05 3번 문제", () => {
  expect(getBetweenSum(3, 5)).toEqual(12);
});

test("2023.06.05 4번 문제", () => {
  expect(getArray(2, 5)).toEqual([2, 4, 6, 8, 10]);
});

test("2023.06.05 5번 문제", () => {
  expect(convertStr("1234")).toEqual(1234);
  expect(convertStr("-1234")).toEqual(-1234);
  expect(convertStr("+1234")).toEqual(1234);
});

test("2023.06.05 6번 문제", () => {
  expect(findNum(10)).toEqual(3);
});
