class Solution:
    def rotate(self, nums, k):
        if k > len(nums):
            k = k % len(nums)
        length = len(nums)
        nums.extend(nums[0:len(nums) - k])
        nums.reverse()
        for _ in range(length - k):
            nums.pop()
        nums.reverse()


if __name__ == '__main__':  # local test
    import os
    if os.getenv('LZS'):
        s = Solution()
        nums = [1, 2, 3, 4, 5, 6, 7]
        s.rotate(nums, 3)
        print(nums)
    # assert nums == [5, 6, 7, 1, 2, 3, 4]
