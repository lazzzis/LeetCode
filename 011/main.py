class Solution(object):

    def maxArea(self, height):
        """
        :type height: List[int]
        :rtype: int
        """
        start, end = 0, len(height) - 1
        maxx = float('-inf')
        while start < end:
            left, right = height[start], height[end]
            maxx = max(maxx, min(left, right) * (end - start))
            if left < right:
                start += 1
            else:
                end -= 1
        return maxx


import os
import random
import unittest

if os.getenv('LZS'):  # local test

    def brute(height):
        length = len(height)
        maxx = float('-inf')
        for i in range(length):
            for j in range(i + 1, length):
                maxx = max(maxx, (j - i) * min(height[i], height[j]))
        return maxx

    def rand():
        length = random.randint(2, 100)
        return [random.randint(1, 1000) for _ in range(length)]

    class Test(unittest.TestCase):

        def test_solution(self):
            s = Solution()
            for _ in range(100):
                l = rand()
                self.assertEqual(
                    s.maxArea(l),
                    brute(l), '{} {} {}'.format(l, s.maxArea(l), brute(l)))

    unittest.main()
