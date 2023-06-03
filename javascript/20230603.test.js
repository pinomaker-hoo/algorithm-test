const { getSumCount, getArraySlice } = require("./20230603");

test("2023.06.03 1번 문제", () => {
  expect(getSumCount("123456")).toBe(21);
});

test("2023.06.03 2번 문제", () => {
  expect(getArraySlice([1, 2, 3, 4], 2)).toStrictEqual([1, 2]);
});
