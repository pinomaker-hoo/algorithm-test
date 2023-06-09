const {
  getMoeny,
  getCollatz,
  getNoNumberSum,
  getPhone,
  getNumber,
} = require(".");

test("2023.06.09 1번 문제", () => {
  expect(getMoeny(3, 20, 4)).toEqual(10);
});

test("2023.06.09 2번 문제", () => {
  expect(getCollatz(6)).toEqual(8);
  expect(getCollatz(16)).toEqual(4);
  expect(getCollatz(626331)).toEqual(-1);
});

test("2023.06.09 3번 문제", () => {
  expect(getPhone("01033334444")).toEqual("*******4444");
});

test("2023.06.09 4번 문제", () => {
  expect(getNumber([4, 7, 12], [true, false, true])).toEqual(9);
});

test("2023.06.09 4번 문제", () => {
  expect(getNoNumberSum([1, 2, 3, 4, 6, 7, 8, 0])).toEqual(14);
});
