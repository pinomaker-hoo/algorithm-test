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

module.exports = {
  getSumCount,
  getArraySlice,
};
