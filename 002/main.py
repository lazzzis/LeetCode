# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        rem = 0
        head = pivot = ListNode(-1)
        while l1 and l2:
            pivot.next = ListNode(-1)
            pivot = pivot.next
            pivot.val = (l1.val + l2.val + rem) % 10
            rem = (l1.val + l2.val + rem) / 10
            l1, l2 = l1.next, l2.next
        l1 = l1 if l1 else l2
        while l1:
            pivot.next = ListNode(-1)
            pivot = pivot.next
            pivot.val = (l1.val + rem) % 10
            rem = (l1.val + rem) / 10
            l1 = l1.next
        if rem:
            pivot.next = ListNode(rem)
        return head.next

import os

if os.getenv('LZS'): # local test

    class ListNode(object):
        def __init__(self, x):
            self.val = x
            self.next = None

    l1 = ListNode(1)
    l2 = temp = ListNode(9)
    for _ in range(5):
        temp.next = ListNode(9)
        temp = temp.next
    s = Solution()
    ans = s.addTwoNumbers(l1, l2)
    while ans:
        print(ans.val)
        ans = ans.next
