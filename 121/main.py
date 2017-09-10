class Solution(object):

    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        if not prices:
            return 0
        profit, minn = 0, prices[0]
        for price in prices:
            if price > minn:
                profit = max(profit, price - minn)
            minn = min(price, minn)
        return profit


s = Solution()
print(s.maxProfit([1, 3, 2, 4 ,5]))
print(s.maxProfit([1, 2, 4 ,5]))
print(s.maxProfit([]))
print(s.maxProfit([0]))
print(s.maxProfit([100]))
print(s.maxProfit([100, 101, 2, 0]))
