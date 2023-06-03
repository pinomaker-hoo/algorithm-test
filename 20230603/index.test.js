const {
  getSumCount,
  getArraySlice,
  getMinusIndex,
  toUpperOrLow,
  printTwoWord,
  evenOrOdd,
  strReplace,
  getMaxAndMin,
} = require(".");

test("2023.06.03 1번 문제", () => {
  expect(getSumCount("123456")).toBe(21);
});

test("2023.06.03 2번 문제", () => {
  expect(getArraySlice([1, 2, 3, 4], 2)).toStrictEqual([1, 2]);
});

test("2023.06.03 3번 문제", () => {
  expect(getMinusIndex([1, 2, 3, 4, -5])).toBe(4);
  expect(getMinusIndex([1, 2, 3, 4])).toBe(-1);
});

test("2023.06.03 4번 문제", () => {
  expect(toUpperOrLow("aBcDeFg")).toEqual("AbCdEfG");
});

test("2023.06.03 5번 문제", () => {
  expect(printTwoWord("apple", "pen")).toEqual("applepen");
});

test("2023.06.03 6번 문제", () => {
  expect(evenOrOdd(100)).toEqual("100 is even");
  expect(evenOrOdd(1)).toEqual("1 is odd");
});

test("2023.06.03 7번 문제", () => {
  expect(strReplace("He11oWor1d", "lloWorl", 2)).toEqual("HelloWorld");
  expect(strReplace("Program29b8UYP", "merS123", 7)).toEqual("ProgrammerS123");
});

test("2023.06.03 8번 문제", () => {
  expect(getMaxAndMin("1 2 3 4")).toEqual("1 4");
  expect(getMaxAndMin("-1 -1")).toEqual("-1 -1");
});
