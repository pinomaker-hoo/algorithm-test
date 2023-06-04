const { reverseArr, getNumber, getBetweenSum } = require(".");

test("2023.06.05 1번 문제", () => {
  expect(reverseArr(12345)).toEqual([5, 4, 3, 2, 1]);
});

test("2023.06.05 2번 문제", () => {
  expect(getNumber(100)).toEqual("Even");
});

test("2023.06.05 3번 문제", () => {
  expect(getBetweenSum(3, 5)).toEqual(12);
});
