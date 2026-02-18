//Median of two arrays

import { abort } from "node:process";

/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).
*/

/*
Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

*/

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const combinedArray = [...new Set([...nums1, ...nums2])]
  combinedArray.sort((a, b) => a - b);
  const middleNumber = combinedArray.length / 2;
  if (middleNumber % 2) {
    const mid1 = Math.floor(middleNumber);
    const medianValue = (combinedArray[mid1 - 1] + combinedArray[mid1]) / 2;
    return medianValue;
  } else {
    return combinedArray[middleNumber];
  }
};

findMedianSortedArrays([3, 5, 3, 7], [3, 7, 4, 3, 2, 7, 1])


