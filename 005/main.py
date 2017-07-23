class Solution(object):
    def longestPalindrome(self, s):
        """
        :type s: str
        :rtype: str
        """
        memorize = dict()
        def pad_test(start, end):
            if (start, end) in memorize:
                return memorize[(start, end)]
            while start <= end:
                if s[start] != s[end]:
                    memorize[(start, end)] = False
                    return False
                memorize[(start, end)] = True
                start, end = start + 1, end - 1
            return True

        n = len(s)
        occurrence = {c:[] for c in s}
        if len(occurrence) == 1:
            return s

        for i, c in enumerate(s):
            occurrence[c].append(i)

        ans = s[0]
        start, end = 0, 0

        for i in xrange(n):
            i = n - 1 - i
            c = s[i]
            for pos in occurrence[c]:
                if pos >= i or i - pos + 1 <= end - start + 1:
                    break
                if pad_test(pos + 1, i - 1):
                    start, end = pos, i

        return s[start: end + 1]

c = Solution()

print c.longestPalindrome('a' * 1000)
