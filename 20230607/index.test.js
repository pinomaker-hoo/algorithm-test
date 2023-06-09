const { getPersonPlace, sortStr } = require(".");

test("2023.06.07 1번 문제", () => {
  expect(getPersonPlace(["Jane", "Kim"])).toEqual("김서방은 1에 있다");
});
