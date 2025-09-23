/**
 * Problem: 1. Two Sum
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/two-sum
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * Two pointers approach.
 * Use a hash map to store the numbers and their indices.
 * For each number, check if the complement (target - number) exists in the map.
 * If it does, return the indices of the two numbers.
 * If it doesn't, add the number and its index to the map.

 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

export const twoSum = (nums, target) => {
    // Create a map to store the numbers and their indices
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement of the current number
        const complement = target - nums[i];

        // If the complement exists in the map, return the indices of the two numbers
        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        // If the complement does not exist in the map, add the number and its index to the map
        map.set(nums[i], i);
    }

    // If no two numbers add up to the target, return an empty array
    return [];
};

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]