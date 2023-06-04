const { reverseArr } = require(".");

test("2023.06.04 1번 문제", () => {
  expect(reverseArr(12345)).toEqual([5, 4, 3, 2, 1]);
});
