const { getSumCount, getArraySlice, getMinusIndex } = require(".");

test("2023.06.03 1번 문제", () => {
  expect(getSumCount("123456")).toBe(21);
});

test("2023.06.03 2번 문제", () => {
  expect(getArraySlice([1, 2, 3, 4], 2)).toStrictEqual([1, 2]);
});

test("2023.06.03 3번 문제", () => {
  expect(getMinusIndex([1, 2, 3, 4, -5])).toBe(4);
  expect(getMinusIndex([1, 2, 3, 4])).toBe(-1);
});