# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

import os
import unittest


class Solution(object):

    def swapPairs(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        pointer = dummy = ListNode(-1)
        dummy.next = head
        while pointer.next and pointer.next.next:
            first = pointer.next
            second = first.next
            pointer.next = second
            first.next = second.next
            second.next = first
            pointer = first
        return dummy.next


if os.getenv('LZS'):
    # local test
    class ListNode(object):

        def __init__(self, x):
            self.val = x
            self.next = None

    class TestSolution(unittest.TestCase):

        def test_solution(self):
            def list2arr(head):
                ans = []
                while head:
                    ans.append(head.val)
                    head = head.next
                return ans

            def arr2list(arr):
                pointer = dummy = ListNode(-1)
                for item in arr:
                    pointer.next = ListNode(item)
                    pointer = pointer.next
                return dummy.next
            s = Solution()
            self.assertEqual(
                list2arr(s.swapPairs(arr2list([1, 3, 5, 7]))),
                [3, 1, 7, 5]
            )
            self.assertEqual(
                list2arr(s.swapPairs(arr2list([1, 3, 5]))),
                [3, 1, 5]
            )
            self.assertEqual(
                list2arr(s.swapPairs(arr2list([1, 3]))),
                [3, 1]
            )
            self.assertEqual(
                list2arr(s.swapPairs(arr2list([1]))),
                [1]
            )
            self.assertEqual(
                list2arr(s.swapPairs(arr2list([]))),
                []
            )
    unittest.main()
