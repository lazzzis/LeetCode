class Solution:
    def findUnsortedSubarray(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        maxx, minn = min(nums), max(nums)
        pivot = -1
        for i, item in enumerate(nums):
            if item > maxx:
                maxx = item
            elif item < maxx:
                pivot = i
        end = pivot
        for i, item in enumerate(nums[::-1]):
            if item < minn:
                minn = item
            elif item > minn:
                pivot = len(nums) - 1 - i
        start = pivot
        if start < 0 or end < 0:
            return 0
        return end - start + 1


if __name__ == '__main__':
    import os

    if os.getenv('LZS'):  # local test
        s = Solution()
        assert s.findUnsortedSubarray([1, 3, 2]) == 2
        assert s.findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]) == 5
        assert s.findUnsortedSubarray([2, 6, 8, 10, 15]) == 0
        assert s.findUnsortedSubarray([2, 6, 8, 10, 15, 1]) == 6
        assert s.findUnsortedSubarray([2]) == 0
        assert s.findUnsortedSubarray([2, 6]) == 0
        assert s.findUnsortedSubarray([12, 6, 6, 6]) == 4
        assert s.findUnsortedSubarray([12, 6, 12, 6, 6]) == 5
        assert s.findUnsortedSubarray([12, 12, 6, 6, 12]) == 4
