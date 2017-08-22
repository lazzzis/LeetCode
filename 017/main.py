import os
import Queue


class Solution(object):
    def letterCombinations(self, digits):
        """
        :type digits: str
        :rtype: List[str]
        """
        nums = {
            '2': 'abc',
            '3': 'def',
            '4': 'ghi',
            '5': 'jkl',
            '6': 'mno',
            '7': 'pqrs',
            '8': 'tuv',
            '9': 'wxyz'
        }
        if digits == '':
            return []
        ans = []
        q = Queue.Queue()
        q.put('')
        while not q.empty():
            item = q.get()
            if len(item) == len(digits):
                ans.append(item)
                continue
            nextDig = digits[len(item)]
            for c in nums[nextDig]:
                q.put(item + c)
        return ans


if os.getenv('LZS'):
    # local test
    s = Solution()
    print(s.letterCombinations('98'))
    print(s.letterCombinations(''))
