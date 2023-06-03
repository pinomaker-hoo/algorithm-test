const { getMinNumber } = require(".");

test("2023.06.03 1번 문제", () => {
  expect(getMinNumber([1, 4, 2], [5, 4, 4])).toBe(29);
});
