/**
 * 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
 * s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.
 */

const sortStr = (s) => {
  const arr = s.split("");
  return arr.sort().reverse().join("");
};

/**
 * 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
 * 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.
 */
const logStar = (a, b) => {
  for (let index = 0; index < b; index++) {
    console.log("*".repeat(a));
  }
};

/**
 * 두 정수 left와 right가 매개변수로 주어집니다.
 * left부터 right까지의 모든 수들 중에서,
 * 약수의 개수가 짝수인 수는 더하고,
 * 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.
 */

const countDivisors = (n) => {
  let count = 0;

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      if (n / i === i) {
        count++;
      } else {
        count += 2;
      }
    }
  }

  return count;
};

const getSum = (left, right) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
  }
};

module.exports = {
  sortStr,
  logStar,
};
