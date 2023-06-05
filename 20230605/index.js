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

/**
 * 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다.
 * 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.
 */
const getArray = (x, n) => {
  const arr = new Array(n).fill(x);
  return arr.map((item, index) => item * (index + 1));
};

/**
 * 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.
 */

const convertStr = (s) => {
  const arr = s.split("");
  if (arr[0] === "+") {
    return Number(arr.slice(1, arr.length).join(""));
  }

  if (arr[0] === "-") {
    return Number(arr.slice(1, arr.length).join("")) * -1;
  }

  return Number(s);
};

/**
 * 자연수 n이 매개변수로 주어집니다.
 * n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요.
 * 답이 항상 존재함은 증명될 수 있습니다.
 */
const findNum = (n) => {
  let num = 0;
  for (let x = 1; true; x++) {
    if (n % x === 1) {
      num = x;
      break;
    }
  }

  return num;
};

/**
 * 함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요.
 * 예를들어 n이 118372면 873211을 리턴하면 됩니다.
 */
const sortArray = (n) => {
  const array = [...String(n)].map(Number);
  return Number(array.sort((a, b) => b - a).join(""));
};

/**
 * 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다.
 * 예를 들어 18의 자릿수 합은 1+8=9이고,
 * 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다.
 * 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수,
 * solution을 완성해주세요.
 */

const checkNumber = (x) => {
  const array = [...String(x)];
  const count = array.reduce((cur, ocr) => cur + Number(ocr), 0);
  if (x % count === 0) {
    return true;
  }

  return false;
};

module.exports = {
  reverseArr,
  getNumber,
  getBetweenSum,
  getArray,
  convertStr,
  findNum,
  sortArray,
  checkNumber,
};
