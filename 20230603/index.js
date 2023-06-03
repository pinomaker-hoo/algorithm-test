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

/**
 * 두 개의 문자열 str1, str2가 공백으로 구분되어 입력으로 주어집니다.
 * 입출력 예와 같이 str1과 str2을 이어서 출력하는 코드를 작성해 보세요.
 */

const printTwoWord = (str1, str2) => {
  return (str1 + str2).trim();
};

/**
 * 자연수 n이 입력으로 주어졌을 때 만약 n이 짝수이면 "n is even"을, 홀수이면 "n is odd"를 출력하는 코드를 작성해 보세요.
 */
const evenOrOdd = (n) => {
  if (n % 2 === 0) {
    return n + " is even";
  }

  return n + " is odd";
};

/**
 * 문자열 my_string, overwrite_string과 정수 s가 주어집니다. 문자열 my_string의 인덱스 s부터 overwrite_string의 길이만큼을 문자열 overwrite_string으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.
 */

const strReplace = (my_string, overwrite_string, s) => {
  if (overwrite_string.length + s > my_string) {
    return my_string.slice(0, s) + overwrite_string;
  }

  return (
    my_string.slice(0, s) +
    overwrite_string +
    my_string.slice(s + overwrite_string.length, my_string.length)
  );
};

module.exports = {
  getSumCount,
  getArraySlice,
  getMinusIndex,
  toUpperOrLow,
  printTwoWord,
  evenOrOdd,
  strReplace,
};
