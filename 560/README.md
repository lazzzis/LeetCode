Consider the Brute Force first. It is handy to compute the prefix sum S[i], indicating the sum from nums[0] to nums[i] included. Then we can computed any interval sum from nums[i] to nums[j], `S[i][j]` by `S[j] - S[i]` where j >= i. The time complexity is `O(n * n)`.

Then you might found that for each prefix sum S[i], we might just need know how many prefix sums equal to `sum - S[i]`. So the basic idea is just use a map to record the amount of prefix sum for a specific value.

https://discuss.leetcode.com/topic/87850/java-solution-presum-hashmap

Main points:

1. compute the prefix sum during iteration
2. use a map to record the amount of prefix sum we have obtained.
