const { sortStr } = require(".");

test("2023.06.25 1번 문제", () => {
  expect(sortStr("Zbcdefg")).toEqual("gfedcbZ");
});
