class Solution:
    def findPairs(self, nums, k):
        if k < 0:
            return 0
        dct = dict()
        for item in nums:
            if item not in dct:
                dct[item] = 1
            else:
                dct[item] += 1
        if k == 0:
            return len([item for item in dct if dct[item] >= 2])
        return len([item for item in dct if (item - k) in dct])

if __name__ == '__main__':
    s = Solution()
    assert s.findPairs([1, 2, 3], 1) == 2
    assert s.findPairs([1, 2, 3], 2) == 1
    assert s.findPairs([1, 2, 3, 2, 3], 0) == 2
    assert s.findPairs([1, 2, 3, 2, 1003, 10002], 1000) == 1
