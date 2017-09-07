# [3,2,1]
# [6,5,4]
# [9,8,7]

# [
#   [7,4,1],
#   [8,5,2],
#   [9,6,3]
# ]


class Solution(object):

    def rotate(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: void Do not return anything, modify matrix in-place instead.
        """
        n = len(matrix)
        for item in matrix:
            item.reverse()

        for i in range(n):
            for j in range(n - i):
                matrix[i][j], matrix[n - j - 1][n - i -
                                                1] = matrix[n - j - 1][n - i - 1], matrix[i][j]


s = Solution()
matrix = [
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16]
]
s.rotate(matrix)
print(matrix)
