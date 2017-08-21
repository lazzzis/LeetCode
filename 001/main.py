class Solution:
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        dct = {}
        for i, item in enumerate(nums):
            if (target - item) in dct:
                return [dct[target - item], i]
            dct[item] = i


import os

# local test
if os.getenv('LZS'):
    import unittest

    class SolutionTest(unittest.TestCase):
        def test_solution(self):
            s = Solution()
            self.assertEqual(s.twoSum([1, 2, 4], 6), [1, 2])
            self.assertEqual(s.twoSum([4, 1, 2], 6), [0, 2])
            self.assertEqual(s.twoSum([2, 1], 3), [0, 1])

    unittest.main()
