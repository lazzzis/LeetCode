Basically, you have to find the max difference between $a_i$ and $a_j$ where i is less then j. We can maintain two variables minprice and maxprofit, corresponding to the min price obtained so far and maxprofit obtained so far.

[https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solution/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solution/)

Main points:

1. maintain two variables indicating the min price obtained so far and continually update maxprofit through the loop
