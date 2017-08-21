# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def removeNthFromEnd(self, head, n):
        """
        :type head: ListNode
        :type n: int
        :rtype: ListNode
        """
        dummy = ListNode(-1)
        dummy.next = head
        fast, slow = head, dummy
        for _ in range(n):
            fast = fast.next
        while fast:
            fast = fast.next
            slow = slow.next
        slow.next = slow.next.next
        return dummy.next

import os
if os.getenv('LZS'):
    dummy = ListNode(-1)
    head = ListNode(1)
    head.next = ListNode(2)
    head.next.next = ListNode(3)
    dummy.next = head
    s = Solution()
    head = s.removeNthFromEnd(head, 3)
    while head:
        print(head.val)
        head = head.next
