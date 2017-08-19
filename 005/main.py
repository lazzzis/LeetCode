class Solution(object):
    def longestPalindrome(self, s):
        """
        :type s: str
        :rtype: str
        """
        dp = [[False for _ in s] for _ in s]
        seats = {item:[] for item in s}
        start, end = 0, 0
        for i, item in enumerate(s):
            dp[i][i] = True
        for i in range(len(s) - 1):
            dp[i][i + 1] = s[i] == s[i + 1]
            if dp[i][i + 1] and end - start < 1:
                start, end = i, i + 1

        for i, item in enumerate(s):
            for j in seats[item]:
                if i - j <= 1:
                    continue
                dp[j][i] = dp[j + 1][i - 1] and s[i] == s[j]
                if dp[j][i] and i - j > end - start:
                    start, end = j, i
            seats[item].append(i)
            # for j in range(0, i - 1):
            #     dp[j][i] = dp[j + 1][i - 1] and s[i] == s[j]
            #     if dp[j][i] and i - j > end - start:
            #         start, end = j, i
        return s[start: end + 1]

if __name__ == '__main__':
    import os
    if os.getenv('LZS'):
        c = Solution()

        print c.longestPalindrome('a' * 1000)
        print c.longestPalindrome("rgczcpratwyqxaszbuwwcadruayhasynuxnakpmsyhxzlnxmdtsqqlmwnbxvmgvllafrpmlfuqpbhjddmhmbcgmlyeypkfpreddyencsdmgxysctpubvgeedhurvizgqxclhpfrvxggrowaynrtuwvvvwnqlowdihtrdzjffrgoeqivnprdnpvfjuhycpfydjcpfcnkpyujljiesmuxhtizzvwhvpqylvcirwqsmpptyhcqybstsfgjadicwzycswwmpluvzqdvnhkcofptqrzgjqtbvbdxylrylinspncrkxclykccbwridpqckstxdjawvziucrswpsfmisqiozworibeycuarcidbljslwbalcemgymnsxfziattdylrulwrybzztoxhevsdnvvljfzzrgcmagshucoalfiuapgzpqgjjgqsmcvtdsvehewrvtkeqwgmatqdpwlayjcxcavjmgpdyklrjcqvxjqbjucfubgmgpkfdxznkhcejscymuildfnuxwmuklntnyycdcscioimenaeohgpbcpogyifcsatfxeslstkjclauqmywacizyapxlgtcchlxkvygzeucwalhvhbwkvbceqajstxzzppcxoanhyfkgwaelsfdeeviqogjpresnoacegfeejyychabkhszcokdxpaqrprwfdahjqkfptwpeykgumyemgkccynxuvbdpjlrbgqtcqulxodurugofuwzudnhgxdrbbxtrvdnlodyhsifvyspejenpdckevzqrexplpcqtwtxlimfrsjumiygqeemhihcxyngsemcolrnlyhqlbqbcestadoxtrdvcgucntjnfavylip")
