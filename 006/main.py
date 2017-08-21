class Solution(object):
    def convert(self, s, numRows):
        """
        :type s: str
        :type numRows: int
        :rtype: str
        """
        if numRows <= 1:
            return s
        ans = ['' for _ in range(numRows)]
        i, row, direction, sLen = 0, 0, 1, len(s)
        while i < sLen:
            ans[row] += s[i]
            i += 1
            if row == numRows - 1:
                direction = -1
            if row == 0:
                direction = 1
            row += direction
        return ''.join(ans)

if __name__ == '__main__':
    import os
    if os.getenv('LZS'): # local test
        s = Solution()
        assert s.convert('PAYPALISHIRING', 3) == 'PAHNAPLSIIGYIR'
        assert s.convert('PAYPALISHIRING', 1) == 'PAYPALISHIRING'
        assert s.convert('PAYPALISHIRING', 0) == 'PAYPALISHIRING'
        assert s.convert('0123456789', 5) == '0817926354'
        assert s.convert('0123456789', 1) == '0123456789'
        assert s.convert('0123456789', 2) == '0246813579'
        assert s.convert('0123456', 2000) == '0123456'
