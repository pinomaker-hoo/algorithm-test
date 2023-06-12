const { getWaterMelon } = require(".");

test("2023.06.12 1번 문제", () => {
  expect(getWaterMelon(3)).toEqual("수박수");
  expect(getWaterMelon(4)).toEqual("수박수박");
});
