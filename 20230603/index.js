/**
 * mission : 한 자리 정수로 이루어진 문자열 num_str이 주어질 때, 각 자리수의 합을 return하도록 solution 함수를 완성해주세요.
 */

const getSumCount = (string = "123456") => {
  const arr = string.split("");
  return arr.reduce((cur, ocr) => cur + Number(ocr), 0);
};

/**
 * mission : 정수 리스트 num_list와 정수 n이 주어질 때, num_list의 첫 번째 원소부터 n 번째 원소까지의 모든 원소를 담은 리스트를 return하도록 solution 함수를 완성해주세요.
 */
const getArraySlice = (numArr, number) => {
  return numArr.slice(0, number);
};

/**
 * mission : 정수 리스트 num_list가 주어질 때, 첫 번째로 나오는 음수의 인덱스를 return하도록 solution 함수를 완성해주세요. 음수가 없다면 -1을 return합니다.
 */
const getMinusIndex = (arr) => {
  let minusIndex = -1;
  for (const [index, number] of arr.entries()) {
    if (number < 0) {
      minusIndex = index;
      break;
    }
  }
  return minusIndex;
};

/**
 * 영어 알파벳으로 이루어진 문자열 str이 주어집니다. 각 알파벳을 대문자는 소문자로 소문자는 대문자로 변환해서 출력하는 코드를 작성해 보세요.
 */
const toUpperOrLow = (str) => {
  const arr = str.split("").map((item) => {
    if (item === item.toUpperCase()) {
      return item.toLowerCase();
    }

    return item.toUpperCase();
  });

  return arr.join("");
};

module.exports = {
  getSumCount,
  getArraySlice,
  getMinusIndex,
  toUpperOrLow,
};
