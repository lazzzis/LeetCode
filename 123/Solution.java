import java.io.*;
import java.util.*;

/*
 * To execute Java, please define "static void main" on a class
 * named Solution.
 *
 * If you need more classes, simply define them inline.
 */

class Solution {
  public static void main(String[] args) {
    Solution s = new Solution();
    int[] prices = {1, 2, 3, 4, 9, 1, 4};
    System.out.println(s.maxProfit(prices));
  }

  public int maxProfit(int[] prices) {
    if (prices == null || prices.length <= 1) return 0;

    int ans = 0;
    int[] leftRes = new int[prices.length];
    int leftMin = prices[0];
    leftRes[0] = 0;
    for (int i = 1; i < prices.length; i++) {
      leftMin = Math.min(leftMin, prices[i]);
      leftRes[i] = Math.max(prices[i] - leftMin, leftRes[i - 1]);
    }

    int rightMax = prices[prices.length - 1];
    int[] rightRes = new int[prices.length];
    rightRes[prices.length - 1] = 0;
    for (int i = prices.length - 2; i >= 0; i--) {
      rightMax = Math.max(prices[i], rightMax);
      rightRes[i] = Math.max(rightMax - prices[i], rightRes[i + 1]);
    }
    for (int i = 0; i < prices.length; i++){
      ans = Math.max(ans, leftRes[i] + rightRes[i]);
    }
    return ans;
  }
}
