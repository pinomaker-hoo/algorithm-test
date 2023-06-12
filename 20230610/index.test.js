const { getMiddleWork, checArr, getStr } = require(".");

test("2023.06.10 1번 문제", () => {
  expect(getMiddleWork("abcde")).toEqual("c");
  expect(getMiddleWork("qwer")).toEqual("we");
});

test("2023.06.10 2번 문제", () => {
  expect(checArr("a234")).toEqual(false);
  expect(checArr("1234")).toEqual(true);
});

test("2023.06.10 3번 문제", () => {
  expect(getStr("try hello world")).toEqual("TrY HeLlO WoRlD");
});
