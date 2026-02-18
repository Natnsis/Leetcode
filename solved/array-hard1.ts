//Median of two arrays

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
  const combined = [...nums1, ...nums2];
  const combinedArray = combined.sort((a, b) => a - b);
  const middleNumber = Math.floor(combinedArray.length / 2);

  console.log(combinedArray);

  if (combinedArray.length === 1) {
    console.log(combinedArray[0])
    return combined[1];
  }

  if (combinedArray.length % 2) {
    console.log(combinedArray[middleNumber])
    return combinedArray[middleNumber];
  } else {
    const medianValue = (combinedArray[middleNumber - 1] + combinedArray[middleNumber]) / 2;
    console.log(medianValue);
    return medianValue;
  }
};

findMedianSortedArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17])
