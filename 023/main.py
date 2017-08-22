# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def mergeKLists(self, lists):
        """
        :type lists: List[ListNode]
        :rtype: ListNode
        """
        items = []
        for head in lists:
            while head:
                items.append(head.val)
                head = head.next
        items.sort()
        dummy = ListNode(-1)
        pointer = dummy
        for item in items:
            pointer.next = ListNode(item)
            pointer = pointer.next
        return dummy.next
