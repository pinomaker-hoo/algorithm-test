const { getNum } = require(".");

test("2023.07.01 1번 문제", () => {
  expect(getNum("3141592", "271")).toEqual(2);
  expect(getNum("500220839878", "7")).toEqual(8);
});
