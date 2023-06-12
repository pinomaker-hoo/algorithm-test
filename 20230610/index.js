/**
 * 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요.
 * 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
 */

const getMiddleWork = (s) => {
  const arr = s.split("");
  if (arr.length % 2 === 0) {
    const index = arr.length / 2 - 1;

    return arr.slice(index, index + 2).join("");
  }

  return arr[arr.length / 2 - 0.5];
};

/**
 * 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요.
 * 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.
 */
const checArr = (s) => {
  const arr = s.split("");
  if (arr.length === 4 || arr.length === 6) {
    const array = arr.filter((item) => {
      if (!isNaN(Number(item))) {
        return true;
      }
      return false;
    });
    return array.length === arr.length ? true : false;
  }

  return false;
};

/**
 * 문자열 s는 한 개 이상의 단어로 구성되어 있습니다.
 * 각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
 * 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.
 */

const getStr = (s) => {
  const arr = s.split("");
  const array = arr.map((item, index) => {
    if (item === "") {
      return item;
    }
    if (index === 0 || index % 2 === 0) {
      return item.toUpperCase();
    }

    return item.toLowerCase();
  });
  return array.join("");
};

module.exports = {
  getMiddleWork,
  checArr,
  getStr,
};
