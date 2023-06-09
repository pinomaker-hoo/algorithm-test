/**
 * 새로 생긴 놀이기구는 인기가 매우 많아 줄이 끊이질 않습니다.
 * 이 놀이기구의 원래 이용료는 price원 인데, 놀이기구를 N 번 째 이용한다면 원래 이용료의 N배를 받기로 하였습니다.
 * 즉, 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상됩니다.
 * 놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return 하도록 solution 함수를 완성하세요.
 * 단, 금액이 부족하지 않으면 0을 return 하세요.
 */

const getMoeny = (price, money, count) => {
  let a = 0;
  for (let index = 1; index <= count; index++) {
    a += price * index;
  }
  const change = a - money;
  return change > 0 ? change : 0;
};

/**
 * 1-1. 입력된 수가 짝수라면 2로 나눕니다.
 * 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
 * 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
 */

const getCollatz = (num) => {
  let conut = 0;
  while (num !== 1) {
    if (conut === 500) {
      return -1;
    }
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num * 3 + 1;
    }

    conut++;
  }

  return conut;
};

/**
 * 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
 * 전화번호가 문자열 phone_number로 주어졌을 때,
 * 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.
 */

const getPhone = (phone_number) => {
  const arr = phone_number.split("");
  const first = new Array(arr.length - 4).fill("*");
  return first.join("") + arr.slice(-4).join("");
};

/**
 * 어떤 정수들이 있습니다.
 * 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다.
 * 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.
 */
const getNumber = (absolutes, signs) => {
  return absolutes.reduce((cur, ocr, index) => {
    const number = signs[index] ? ocr : ocr * -1;
    return cur + number;
  }, 0);
};

/**
 * 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다.
 * numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.
 */

const getNoNumberSum = (numbers) => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return arr.reduce((cur, ocr) => {
    if (numbers.includes(ocr)) {
      return cur;
    }
    return cur + ocr;
  });
};

module.exports = {
  getMoeny,
  getCollatz,
  getPhone,
  getNumber,
  getNoNumberSum,
};
