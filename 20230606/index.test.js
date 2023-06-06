const { getDiviorArr } = require(".");

test("2023.06.06 1번 문제", () => {
  expect(getDiviorArr([5, 9, 7, 10], 5)).toEqual([5, 10]);
});
