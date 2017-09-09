class Solution(object):

    def totalNQueens(self, n):
        """
        :type n: int
        :rtype: int
        """

        def fill(row):
            if row >= n:
                return 1
            total = 0
            for col in range(n):
                if not (cols[col] or dig45[row + col] or dig135[n + col - row]):
                    cols[col] = dig45[row + col] = dig135[n + col - row] = 1
                    total += fill(row + 1)
                    cols[col] = dig45[row + col] = dig135[n + col - row] = 0
            return total

        if n == 0:
            return 0

        total = 0
        cols, dig45, dig135 = [0 for _ in range(n + 1)], [0 for _ in range(
            2 * n)], [0 for _ in range(2 * n)]

        for i in range(n / 2):
            cols[i] = dig45[0 + i] = dig135[n + (i - 0)] = 1
            total += fill(1)
            cols[i] = dig45[0 + i] = dig135[n + (i - 0)] = 0


        total *= 2

        if n % 2:
            i = n / 2
            cols[i] = dig45[0 + i] = dig135[n + (i - 0)] = 1
            total += fill(1)
            cols[i] = dig45[0 + i] = dig135[n + (i - 0)] = 0

        return total

s = Solution()
print(s.totalNQueens(0))
