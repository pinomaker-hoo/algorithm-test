const { reverseArr, getNumber } = require(".");

test("2023.06.05 1번 문제", () => {
  expect(reverseArr(12345)).toEqual([5, 4, 3, 2, 1]);
});

test("2023.06.05 2번 문제", () => {
  expect(getNumber(100)).toEqual("Even");
});
