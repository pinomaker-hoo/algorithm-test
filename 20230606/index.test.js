const { getDiviorArr, getCount, delMixIndex } = require(".");

test("2023.06.06 1번 문제", () => {
  expect(getDiviorArr([5, 9, 7, 10], 5)).toEqual([5, 10]);
});

test("2023.06.06 2번 문제", () => {
  expect(getCount("pPoooyY")).toEqual(true);
  expect(getCount("Pyy")).toEqual(false);
  expect(getCount("b")).toEqual(true);
});

test("2023.06.06 3번 문제", () => {
  expect(delMixIndex([4, 3, 2, 1])).toEqual([4, 3, 2]);
  expect(delMixIndex([10])).toEqual([-1]);
});
