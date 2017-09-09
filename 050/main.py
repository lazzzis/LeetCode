class Solution(object):
    def myPow(self, x, n):
        """
        :type x: float
        :type n: int
        :rtype: float
        """
        med, flag = 1, 1
        if n < 0:
            flag, n = -1, -n
        while n:
            if n % 2:
                med *= x
            x *= x
            n /= 2
        return med if flag > 0 else 1 / med

s = Solution()

print(s.myPow(10, 3))
print(s.myPow(2, 7))
print(s.myPow(34.00515, -3))
print(s.myPow(-34.00515, -3))
