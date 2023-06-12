/**
 * 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수,
 * solution을 완성하세요.
 * 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.
 */

const getWaterMelon = (n) => {
  let word = "";
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      word += "박";
    } else {
      word += "수";
    }
  }
  return word;
};

/**
 * 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다.
 * a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.
 * 이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다.
 *  (n은 a, b의 길이)
 */
const getCount = (a, b) => {
  return a.reduce((cur, ocr, index) => cur + ocr * b[index], 0);
};

/**
 * 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행,
 * 같은 열의 값을 서로 더한 결과가 됩니다.
 * 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수,
 * solution을 완성해주세요.
 */
const getSum = (arr1, arr2) => {
  const array = arr1.map((item, i) => {
    return item.map((val, j) => {
      return val + arr2[i][j];
    });
  });

  return array;
};

module.exports = {
  getWaterMelon,
  getCount,
  getSum,
};
