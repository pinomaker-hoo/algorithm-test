const { sortStr, logStar } = require(".");

test("2023.06.25 1번 문제", () => {
  expect(sortStr("Zbcdefg")).toEqual("gfedcbZ");
});

// test("2023.06.25 2번 문제", () => {
//   expect(logStar(5, 1)).toEqual("*****");
// });
