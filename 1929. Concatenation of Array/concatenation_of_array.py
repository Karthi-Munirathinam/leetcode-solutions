"""
Problem: 1929. Concatenation of Array
Difficulty: Easy
URL: https://leetcode.com/problems/concatenation-of-array

Time Complexity: O(n)
Space Complexity: O(n)
"""

class Solution:
    def getConcatenation(self, nums):
        """
        Create a new array with length of 2 * nums.length and copy the elements of nums to the new array.
        """
        length = len(nums)
        result = [0] * (length * 2)
        for i in range(length):
            result[i] = nums[i]
            result[i + length] = nums[i]
        return result

# Test cases
if __name__ == "__main__":
    solution = Solution()
    print(solution.getConcatenation([1, 2, 3])) # Expected: [1, 2, 3, 1, 2, 3]
    print(solution.getConcatenation([1, 3, 2, 1])) # Expected: [1, 3, 2, 1, 1, 3, 2, 1]