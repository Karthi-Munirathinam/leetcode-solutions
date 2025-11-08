/**
 * Problem: 1929. Concatenation of Array
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/concatenation-of-array
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * Create a new array with length of 2 * nums.length and copy the elements of nums to the new array.
 * @param {number[]} nums
 * @return {number[]}
 */

export const getConcatenation = (nums) => {
  const length = nums.length;
  const result = new Array(length * 2);
  for (let i = 0; i < length; i++) {
    result[i] = nums[i];
    result[i + length] = nums[i];
  }
  return result;
};

console.log(getConcatenation([1, 2, 3])); // Expected: [1, 2, 3, 1, 2, 3]
console.log(getConcatenation([1, 3, 2, 1])); // Expected: [1, 3, 2, 1, 1, 3, 2, 1]