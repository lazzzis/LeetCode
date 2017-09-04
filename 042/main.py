class Solution(object):
    def trap(self, height):
        """
        :type height: List[int]
        :rtype: int
        """
        left, right = 0, len(height) - 1
        lmax, rmax = -1, -1
        res = 0
        while left < right:
            lv, rv = height[left], height[right]
            lmax, rmax = max(lmax, lv), max(rmax, rv)
            if lmax < rmax:
                res += lmax - lv
                left += 1
            else:
                res += rmax - rv
                right -= 1
        return res
