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
