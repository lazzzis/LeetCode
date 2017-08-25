class Solution(object):

    def searchInsert(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        if target < nums[0]:
            return 0
        if target > nums[-1]:
            return len(nums)
        left, right = 0, len(nums) - 1
        while left + 1 < right:
            mid = (left + right) >> 1  # math.floor
            if nums[mid] == target:
                return mid
            if nums[mid] > target:
                right = mid
            else:
                left = mid
        if nums[left] == target:
            return left
        elif nums[right] == target:
            return right
        elif nums[left] > target:
            return left
        elif nums[right] > target:
            return right

import os

if os.getenv('LZS'):
    s = Solution()
    assert s.searchInsert([1, 3, 5, 6], 5) == 2
    assert s.searchInsert([1, 3, 5, 6], 2) == 1
    assert s.searchInsert([1, 3, 5, 6], 7) == 4
    assert s.searchInsert([1, 3, 5, 6], 0) == 0
    assert s.searchInsert([1, 3, 5, 7], 6) == 3
