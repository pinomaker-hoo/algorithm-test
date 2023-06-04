/**
 * 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.
 */
const reverseArr = (arr) => {
  return Array.from(String(arr), Number).reverse();
};

/**
 * 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.
 */
const getNumber = (num) => {
  if (num % 2 === 0) {
    return "Even";
  }

  return "Odd";
};

module.exports = { reverseArr, getNumber };
