class Solution(object):
    def longestPalindrome(self, s):
        start, end = 0, 0
        for i, _ in enumerate(s):
            length = 1
            while i - length >= 0 and i + length < len(s):
                if s[i - length] != s[i + length]:
                    break
                length += 1
            if 2 * length - 1 > end - start + 1:
                end, start = i + length - 1, i - length + 1
        if end - start + 1 == len(s):
            return s
        for i, _ in enumerate(s[:-1]):
            if s[i] != s[i + 1]:
                continue
            length = 1
            while i - length >= 0 and i + length + 1 < len(s):
                if s[i - length] != s[i + length + 1]:
                    break
                length += 1
            if 2 * length > end - start + 1:
                end, start = i + length, i - length + 1
        return s[start:end + 1]
    # def longestPalindrome(self, s):
    #     """
    #     :type s: str
    #     :rtype: str
    #     """
    #     dp = [[False for _ in s] for _ in s]
    #     seats = {item:[] for item in s}
    #     start, end = 0, 0
    #     for i, item in enumerate(s):
    #         dp[i][i] = True
    #     for i in range(len(s) - 1):
    #         dp[i][i + 1] = s[i] == s[i + 1]
    #         if dp[i][i + 1] and end - start < 1:
    #             start, end = i, i + 1
    #
    #     for i, item in enumerate(s):
    #         for j in seats[item]:
    #             if i - j <= 1:
    #                 continue
    #             dp[j][i] = dp[j + 1][i - 1] and s[i] == s[j]
    #             if dp[j][i] and i - j > end - start:
    #                 start, end = j, i
    #         seats[item].append(i)
    #         # for j in range(0, i - 1):
    #         #     dp[j][i] = dp[j + 1][i - 1] and s[i] == s[j]
    #         #     if dp[j][i] and i - j > end - start:
    #         #         start, end = j, i
    #     return s[start: end + 1]

if __name__ == '__main__':
    import os
    if os.getenv('LZS'):
        c = Solution()

        print c.longestPalindrome('a' * 1000)
        print c.longestPalindrome("rgczcpratwyqxaszbuwwcadruayhasynuxnakpmsyhxzlnxmdtsqqlmwnbxvmgvllafrpmlfuqpbhjddmhmbcgmlyeypkfpreddyencsdmgxysctpubvgeedhurvizgqxclhpfrvxggrowaynrtuwvvvwnqlowdihtrdzjffrgoeqivnprdnpvfjuhycpfydjcpfcnkpyujljiesmuxhtizzvwhvpqylvcirwqsmpptyhcqybstsfgjadicwzycswwmpluvzqdvnhkcofptqrzgjqtbvbdxylrylinspncrkxclykccbwridpqckstxdjawvziucrswpsfmisqiozworibeycuarcidbljslwbalcemgymnsxfziattdylrulwrybzztoxhevsdnvvljfzzrgcmagshucoalfiuapgzpqgjjgqsmcvtdsvehewrvtkeqwgmatqdpwlayjcxcavjmgpdyklrjcqvxjqbjucfubgmgpkfdxznkhcejscymuildfnuxwmuklntnyycdcscioimenaeohgpbcpogyifcsatfxeslstkjclauqmywacizyapxlgtcchlxkvygzeucwalhvhbwkvbceqajstxzzppcxoanhyfkgwaelsfdeeviqogjpresnoacegfeejyychabkhszcokdxpaqrprwfdahjqkfptwpeykgumyemgkccynxuvbdpjlrbgqtcqulxodurugofuwzudnhgxdrbbxtrvdnlodyhsifvyspejenpdckevzqrexplpcqtwtxlimfrsjumiygqeemhihcxyngsemcolrnlyhqlbqbcestadoxtrdvcgucntjnfavylip")
