/**
 * array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
 * divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.
 */
const getDiviorArr = (arr, divisor) => {
  const array = arr.filter((item) => {
    if (item % divisor === 0) return true;
  });

  if (array.length < 1) {
    return [-1];
  }

  return array.sort((a, b) => a - b);
};

/**
 * 대문자와 소문자가 섞여있는 문자열 s가 주어집니다.
 * s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요.
 * 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다.
 * 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.
 * 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.
 */

const getCount = (s) => {
  const arr = s.split("").map((item) => item.toUpperCase());

  const pCount = arr.filter((item) => {
    if (item === "P") {
      return true;
    }
  }).length;

  const yCount = arr.filter((item) => {
    if (item === "Y") {
      return true;
    }
  }).length;

  if (pCount === 0 && yCount === 0) {
    return true;
  }

  if (pCount === yCount) {
    return true;
  }

  return false;
};

module.exports = {
  getCount,
  getDiviorArr,
};
