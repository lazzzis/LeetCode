class Solution(object):
    def removeElement(self, nums, val):
        """
        :type nums: List[int]
        :type val: int
        :rtype: int
        """
        slow = 0
        for i, item in enumerate(nums):
            if item != val:
                nums[slow] = item
                slow += 1
        return slow
