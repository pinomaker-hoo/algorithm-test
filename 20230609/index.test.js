const { getMoeny, getCollatz, getPhone } = require(".");

test("2023.06.09 1번 문제", () => {
  expect(getMoeny(3, 20, 4)).toEqual(10);
});

test("2023.06.09 2번 문제", () => {
  expect(getCollatz(6)).toEqual(8);
  expect(getCollatz(16)).toEqual(4);
  expect(getCollatz(626331)).toEqual(-1);
});

test("2023.06.09 2번 문제", () => {
  expect(getPhone("01033334444")).toEqual("*******4444");
});
