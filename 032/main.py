class Solution(object):

    def longestValidParentheses(self, s):
        """
        :type s: str
        :rtype: int
        """
        stack, leftmost = [], -1
        maxx = 0
        for i, item in enumerate(s):
            if item == '(':
                stack.append(i)
            else:
                if not stack:  # empty
                    leftmost = i
                else:
                    if stack:  # not empty
                        stack.pop()
                    if stack:
                        maxx = max(maxx, i - stack[-1])
                    else:
                        maxx = max(maxx, i - leftmost)
        return maxx

import os
import random
import unittest

if os.getenv('LZS'):
    def valid(s):
        stack = []
        for item in s:
            if item == '(':
                stack.append(item)
            else:
                if not stack:
                    return False
                stack.pop()
        return not stack

    def brute(s):
        maxx = 0
        for i in range(len(s)):
            for j in range(i + 1, len(s)):
                if valid(s[i:j + 1]):
                    maxx = max(maxx, j - i + 1)
        return maxx

    class Test(unittest.TestCase):

        def test_solution(self):
            for _ in range(100):
                length = random.randint(10, 100)
                s = Solution()
                parentnesses = [random.choice('()') for _ in range(length)]
                res, expect = s.longestValidParentheses(
                    parentnesses), brute(parentnesses)
                self.assertEqual(
                    res,
                    expect,
                    '{} != {} for {}'.format(res, expect, parentnesses)
                )
    unittest.main()
