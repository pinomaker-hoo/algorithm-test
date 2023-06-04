const { getMinNumber, getDelStr } = require(".");

test("2023.06.04 1번 문제", () => {
  expect(getMinNumber([1, 4, 2], [5, 4, 4])).toBe(29);
});

test("2023.06.04 2번 문제", () => {
  expect(getDelStr("baabaa")).toBe(1);
  expect(getDelStr("cdcd")).toBe(0);
});
