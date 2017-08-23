class Solution(object):

    def generateParenthesis(self, n):
        """
        :type n: int
        :rtype: List[str]
        """
        def dfs(current, lst, left, right, n):
            if left == right and len(current) == 2 * n:
                lst.append(current)
                return
            if left < n:
                dfs(current + '(', lst, left + 1, right, n)
            if left > right:
                dfs(current + ')', lst, left, right + 1, n)
        ans = []
        dfs('', ans, 0, 0, n)
        return ans

import os

if os.getenv('LZS'):
    # local test
    s = Solution()
    print(s.generateParenthesis(3))
