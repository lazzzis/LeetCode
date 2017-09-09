import math

class Solution(object):
    def solveNQueens(self, n):
        """
        :type n: int
        :rtype: List[List[str]]
        """
        def is_conflicted(grids, x, y):
            for i in range(0, x):
                if grids[i] & (1 << (n - y - 1)):
                    return True

            i, j = x - 1, y - 1
            while i >= 0 and j >= 0:
                if grids[i] & (1 << (n - j - 1)):
                    return True
                i, j = i - 1, j - 1

            i, j = x - 1, y + 1
            while i >= 0 and j < n:
                if grids[i] & (1 << (n - j - 1)):
                    return True
                i, j = i - 1, j + 1

            return False

        def fill(grids, x, ans):
            if x >= n:
                ans.append(grids[:])
                return
            for i in range(0, n):
                if not is_conflicted(grids, x, i):
                    grids[x] = 1 << (n - i - 1)
                    fill(grids, x + 1, ans)
                    grids[x] = 0

        def mirror(x, n):
            return 1 << (n - 1 - int(math.log(x) / math.log(2)))

        def grids_to_strs(grids):
            res = []
            for item in grids:
                s = '.' * n
                pivot = n - 1  - int(math.log(item) / math.log(2))
                s = s[0:pivot] + 'Q' + s[pivot + 1:]
                res.append(s)
            return res

        ans, grids = [], [ 0 for i in range(n) ]
        for i in range(0, n / 2):
            grids[0] = 1 << (n - 1 - i)
            fill(grids, 1, ans)
            grids[0] = 0

        ans.extend([ [mirror(row, n) for row in rows] for rows in ans ])

        if n % 2:
            grids[0] = 1 << n / 2
            fill(grids, 1, ans)

        return [ grids_to_strs(rows) for rows in ans ]

s = Solution()
print(s.solveNQueens(7))
