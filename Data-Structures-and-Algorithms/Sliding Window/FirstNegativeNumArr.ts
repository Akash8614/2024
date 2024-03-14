/***************************************************************************************************************
Given an integer array nums, return an array of first (-)ive number of all sub arrays of window size k.
Note: if window does not contain any (-)ive number then return 0.

Example:

Input: [2, -5, 25, -8, 10, 5, 2 ,-9, 5]
Output: [-5, -5, -8, -8, 0, -9, -9]

****************************************************************************************************************/

const FirstNegativeNumArr: (arr: number[], windowSize: number) => number[] = (
  arr,
  windowSize
) => {
  let i = 0;
  let negativeArr: number[] = [];
  let jArr: number[] = [];
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] < 0) jArr.push(arr[j]);
    if (j - i + 1 == windowSize) {
      if (jArr.length > 0) {
        negativeArr.push(jArr[0]);
        if (arr[i] == jArr[0]) jArr.shift();
      } else negativeArr.push(0);
      i++;
    }
  }
  return negativeArr;
};
