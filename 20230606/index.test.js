const { getDiviorArr, getCount } = require(".");

test("2023.06.06 1번 문제", () => {
  expect(getDiviorArr([5, 9, 7, 10], 5)).toEqual([5, 10]);
});

test("2023.06.06 2번 문제", () => {
  expect(getCount("pPoooyY")).toEqual(true);
  expect(getCount("Pyy")).toEqual(false);
  expect(getCount("b")).toEqual(true);
});
