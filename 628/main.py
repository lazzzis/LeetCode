class Solution:
    def maximumProduct(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        nums.sort()
        return max(
            nums[-1] * nums[-2] * nums[-3],
            nums[-1] * nums[-2] * nums[0],
            nums[-1] * nums[0] * nums[1],
            nums[0] * nums[1] * nums[2],
        )

if __name__ == '__main__':
    import os, unittest, random
    if os.getenv('LZS'): # local test
        def brute(nums):
            maxx = float('-inf')
            for i, item1 in enumerate(nums):
                for j, item2 in enumerate(nums):
                    for k, item3 in enumerate(nums):
                        if i not in (j, k) and j not in (i, k):
                            maxx = max(maxx, item1 * item2 * item3)
            return maxx
        class Test(unittest.TestCase):
            def test_solution(self):
                s = Solution()
                for _ in range(10):
                    l = random.randint(3, 300)
                    print(l)
                    lst = [random.randint(-1000, 1000) for _ in range(l)]
                    self.assertEqual(brute(lst), s.maximumProduct(lst))
        unittest.main()
