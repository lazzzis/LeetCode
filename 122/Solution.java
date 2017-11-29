class Solution {
  public static void main(String[] args) {
    int[] prices = {5, 5, 5, 5, 5, 5};
    Solution s = new Solution();
    System.out.println(s.maxProfit(prices));
  }

  public int maxProfit(int[] prices) {
    if (prices == null || prices.length <= 1) return 0;
    int res = 0;
    int min = prices[0];
    // 5 2 3 4 1
    for (int i = 0; i < prices.length; i++) {
      if (i == prices.length - 1) {
        res += prices[i] - min;
      } else if (prices[i] >= prices[i + 1]) {
        res += prices[i] - min;
        min = prices[i + 1];
      }
    }
    return res;
  }
}
