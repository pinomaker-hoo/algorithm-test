const { getMoeny } = require(".");

test("2023.06.09 1번 문제", () => {
  expect(getMoeny(3, 20, 4)).toEqual(10);
});
