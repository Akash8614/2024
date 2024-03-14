/***************************************************************************************************************
Given an integer array nums, find the contiguous subarray 
(containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

For Reference: "https://dev.to/akhilpokle/maximum-sum-subarray-of-size-k-applying-sliding-window-pattern-59fa"

****************************************************************************************************************/

const LargestSum: (arr: number[], windowSize: number) => number = (
  arr,
  windowSize
) => {
  let i = 0;
  let sum = 0;
  let max = 0;
  for (let j = 0; j < arr.length; j++) {
    sum += arr[j];
    if (j - i + 1 == windowSize) {
      max = Math.max(sum, max);
      sum -= arr[i];
      i++;
    }
  }
  return max;
};
