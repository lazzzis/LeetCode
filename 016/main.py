class Solution(object):

    def threeSumClosest(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        nums, closest = sorted(nums), float('inf')
        for i, item in enumerate(nums):
            if i > 0 and nums[i] == nums[i - 1]:
                continue
            rem = target - item
            l, r = i + 1, len(nums) - 1
            while l < r:
                lv, rv = nums[l], nums[r]
                if abs(closest) > abs(rem - (lv + rv)):
                    closest = rem - (lv + rv)
                if lv + rv == rem:
                    return target
                elif lv + rv > rem:
                    r -= 1
                    while r > 0 and nums[r] == nums[r + 1]:
                        r -= 1
                elif lv + rv < rem:
                    l += 1
                    while l < len(nums) - 1 and nums[l] == nums[l - 1]:
                        l += 1
        return target - closest

import os
import random
import unittest

if os.getenv('LZS'):
    # local test
    def brute(nums, target):
        closest = float('inf')
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                for k in range(j + 1, len(nums)):
                    if abs(closest) > abs(nums[i] + nums[j] + nums[k] - target):
                        closest = target - (nums[i] + nums[j] + nums[k])
        return target - closest

    class Test(unittest.TestCase):

        def test_solution(self):
            s = Solution()
            for _ in range(200):
                nums = [random.randint(-100, 100) for _ in range(50)]
                target = random.randint(-105, 1000)
                res, expect = s.threeSumClosest(
                    nums, target), brute(nums, target)
                self.assertEqual(
                    abs(res - target),
                    abs(expect - target),
                    'target {} for {}: expect {} to be {}'.format(
                        target, nums, res, expect)
                )
    unittest.main()
