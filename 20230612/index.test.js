const { getWaterMelon, getCount } = require(".");

test("2023.06.12 1번 문제", () => {
  expect(getWaterMelon(3)).toEqual("수박수");
  expect(getWaterMelon(4)).toEqual("수박수박");
});

test("2023.06.12 2번 문제", () => {
  expect(getCount([1, 2, 3, 4], [-3, -1, 0, 2])).toEqual(3);
});
