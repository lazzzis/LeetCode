class Solution(object):

    def merge(self, nums1, m, nums2, n):
        """
        :type nums1: List[int]
        :type m: int
        :type nums2: List[int]
        :type n: int
        :rtype: void Do not return anything, modify nums1 in-place instead.
        """
        cur = m + n - 1
        i, j = m - 1, n - 1
        while i >= 0 and j >= 0:
            if nums1[i] > nums2[j]:
                nums1[cur] = nums1[i]
                i -= 1
            else:
                nums1[cur] = nums2[j]
                j -= 1
            cur -= 1
        while j >= 0:
            nums1[cur] = nums2[j]
            cur, j = cur - 1, j - 1


s = Solution()
n1, n2 = [1, 2, 3, 0, 0, 0], [1, 4, 11]
s.merge(n1, 3, n2, 3)
print(n1)
n1, n2 = [12, 21, 31, 0, 0, 0], [1, 4, 11]
s.merge(n1, 3, n2, 3)
print(n1)
n1, n2 = [1, 4, 11, 0, 0, 0], [12, 42, 112]
s.merge(n1, 3, n2, 3)
print(n1)
n1, n2 = [1, 0], [-1]
s.merge(n1, 1, n2, 1)
print(n1)
