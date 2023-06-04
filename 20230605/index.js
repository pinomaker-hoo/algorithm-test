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

/**
 * 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
 * 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.
 */
const getBetweenSum = (a, b) => {
  let sum = 0;
  if (a > b) {
    for (let i = b; i <= a; i++) {
      sum += i;
    }

    return sum;
  }
  for (let i = a; i <= b; i++) {
    sum += i;
  }

  return sum;
};

module.exports = { reverseArr, getNumber, getBetweenSum };
