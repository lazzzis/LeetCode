class Solution(object):

    def multiply(self, num1, num2):
        """
        :type num1: str
        :type num2: str
        :rtype: str
        """
        if len(num1) > len(num2):
            num1, num2 = num2, num1
        a = [int(item) for item in num1][::-1]
        b = [int(item) for item in num2][::-1]
        res = [0 for _ in range(len(a) * len(b) + 1)]
        for i, item in enumerate(a):
            rem = 0
            middleRes = []
            for item2 in b:
                digit = (item * item2 + rem) % 10
                rem = (item * item2 + rem) / 10
                middleRes.append(digit)
            if rem:
                middleRes.append(rem)
            rem = 0

            for j, addItem in enumerate(middleRes):
                res[i + j], rem = (res[i + j] + addItem +
                                   rem) % 10, (res[i + j] + addItem + rem) / 10

            if rem:
                cur = i + len(middleRes)
                while rem:
                    res[cur], rem = (
                        res[cur] + rem) % 10, (res[cur] + rem) / 10
                    cur += 1

        while res and res[-1] == 0:
            res.pop()
        if not res:
            return 0
        return ''.join([str(item) for item in res][::-1])
