/**
 * 길이가 같은 배열 A, B 두개가 있습니다. 각 배열은 자연수로 이루어져 있습니다.
 * 배열 A, B에서 각각 한 개의 숫자를 뽑아 두 수를 곱합니다. 이러한 과정을 배열의 길이만큼 반복하며, 두 수를 곱한 값을 누적하여 더합니다. 이때 최종적으로 누적된 값이 최소가 되도록 만드는 것이 목표입니다. (단, 각 배열에서 k번째 숫자를 뽑았다면 다음에 k번째 숫자는 다시 뽑을 수 없습니다.)
 * 예를 들어 A = [1, 4, 2] , B = [5, 4, 4] 라면
 * A에서 첫번째 숫자인 1, B에서 첫번째 숫자인 5를 뽑아 곱하여 더합니다.
 * (누적된 값 : 0 + 5(1x5) = 5)A에서 두번째 숫자인 4, B에서 세번째 숫자인 4를 뽑아 곱하여 더합니다.
 * (누적된 값 : 5 + 16(4x4) = 21)A에서 세번째 숫자인 2, B에서 두번째 숫자인 4를 뽑아 곱하여 더합니다. (누적된 값 : 21 + 8(2x4) = 29)
 * 즉, 이 경우가 최소가 되므로 29를 return 합니다.
 * 배열 A, B가 주어질 때 최종적으로 누적된 최솟값을 return 하는 solution 함수를 완성해 주세요.
 */

const getMinNumber = (A, B) => {
  const sortA = A.sort((a, b) => a - b);
  const sortB = B.sort((a, b) => b - a);

  return sortA.reduce((cur, ocr, index) => cur + ocr * sortB[index], 0);
};

/**
 * 짝지어 제거하기는, 알파벳 소문자로 이루어진 문자열을 가지고 시작합니다.
 * 먼저 문자열에서 같은 알파벳이 2개 붙어 있는 짝을 찾습니다.
 * 그다음, 그 둘을 제거한 뒤, 앞뒤로 문자열을 이어 붙입니다.
 * 이 과정을 반복해서 문자열을 모두 제거한다면 짝지어 제거하기가 종료됩니다.
 * 문자열 S가 주어졌을 때, 짝지어 제거하기를 성공적으로 수행할 수 있는지 반환하는 함수를 완성해 주세요.
 * 성공적으로 수행할 수 있으면 1을, 아닐 경우 0을 리턴해주면 됩니다.
 */
const delStr = (arr) => {
  let resultArr = [];
  let result = false;
  for (const [index, item] of arr.entries()) {
    if (item === arr[index + 1]) {
      resultArr = arr.filter((item, i) => i !== index && i !== index + 1);
      result = true;
      break;
    }
  }

  return result ? resultArr : false;
};

const getDelStr = (s) => {
  let arr = s.split("");

  while (true) {
    const del = delStr(arr);
    if (!del) {
      break;
    }
    arr = del;
  }

  return arr.length === 0 ? 1 : 0;
};

module.exports = { getMinNumber, getDelStr };
