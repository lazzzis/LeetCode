class Solution(object):

    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        if s == '':
            return False
        pairs = {
            ')': '(',
            '}': '{',
            ']': '['
        }
        lefts = pairs.values()
        stack = [s[0]]
        pivot = 1
        while pivot < len(s):
            ch = s[pivot]
            if ch in lefts:
                stack.append(ch)
            elif ch in pairs:
                if len(stack) == 0 or stack[-1] != pairs[ch]:
                    return False
                else:
                    stack.pop()
            else:
                return False
            pivot += 1
        return len(stack) == 0

import os

if os.getenv('LZS'):  # local test
    s = Solution()
    assert s.isValid('{}{}{}')
    assert s.isValid('{}{[()]}{}')
    assert s.isValid('(){}(){[()]}{}')
    assert not s.isValid('((){[()]}{}')
    assert not s.isValid('')
    assert not s.isValid('{')
    assert not s.isValid('[])')
