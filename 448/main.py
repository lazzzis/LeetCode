class Solution:
    def findDisappearedNumbers(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        l = len(nums)
        for item in nums:
            item = abs(item)
            if item <= l and nums[item - 1] > 0:
                nums[item - 1] = -nums[item - 1]
        return [item + 1 for item in range(0, l) if nums[item] > 0]


import os

if os.getenv('LZS'):
    assert Solution().findDisappearedNumbers([4,3,2,7,8,2,3,1]) == [5, 6]
