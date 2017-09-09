class Solution(object):

    def groupAnagrams(self, strs):
        """
        :type strs: List[str]
        :rtype: List[List[str]]
        """
        d = dict()
        for item in strs:
            key = ''.join(sorted(item))
            if key not in d:
                d[key] = [item]
            else:
                d[key].append(item)
        return d.values()

"""
In the problem of anagrams, dict is quite often used to efficiently get us to the correct answer.
So I would think about how to compute a key for anagrams. One way is to use sort function. The sorted anagrams yield a same string. For example, "acb" and "abc" are anagrams. After sorted, they both yield "abc".
But there is a concern about the time complexity. Since the time complexity of the sort operation is O(m logm) while m is the length of the string. Is there any method to compute a key in a more efficient way for anagrams?
Yes, there exists indeed. The description of this method is documented at 'main.js'.

https://cheonhyangzhang.wordpress.com/2015/09/22/49-leetcode-java-group-anagrams-medium/
"""
