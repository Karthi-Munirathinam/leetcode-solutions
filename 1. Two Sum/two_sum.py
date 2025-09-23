"""
Problem: 1. Two Sum
Difficulty: Easy
URL: https://leetcode.com/problems/two-sum

Time Complexity: O(n)
Space Complexity: O(n)
"""

class Solution:
    def twoSum(self, nums, target):
        """
        Two pointers approach.
        Use a hash map to store the numbers and their indices.
        For each number, check if the complement (target - number) exists in the map.
        If it does, return the indices of the two numbers.
        If it doesn't, add the number and its index to the map.
        """
        map = {}
        
        # Iterate through the list of numbers
        for i, num in enumerate(nums):
            # Calculate the complement of the current number
            complement = target - num

            # If the complement exists in the map, return the indices of the two numbers
            if complement in map:
                # Return the indices of the two numbers
                return [map[complement], i]

            # If the complement does not exist in the map, add the number and its index to the map
            map[num] = i

        # If no two numbers add up to the target, return an empty array
        return []

# Test cases
if __name__ == "__main__":
    solution = Solution()
    
    # Test case 1
    # Expected: [0, 1]
    print(solution.twoSum([2, 7, 11, 15], 9))