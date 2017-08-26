class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        prev, slow = float('-inf'), 0
        for i, item in enumerate(nums):
            if item != prev:
                nums[slow] = item
                slow += 1
            prev = item
        return slow

import os

if os.getenv('LZS'):
    s = Solution()
    lst = [1, 1, 2, 2, 3, 4, 5, 5]
    print(s.removeDuplicates(lst))
    print(lst)
