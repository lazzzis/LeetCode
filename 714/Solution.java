class Solution {
    public int maxProfit(int[] prices, int k) {
        if (prices == null || prices.length <= 1) return 0;
        Stack<Integer> buy = new Stack<>();
        Stack<Integer> sell = new Stack<>();
        for (int p : prices) {
            if (buy.empty()) {
                buy.push(p);
            } else if (buy.size() == sell.size()) {
                if (p > sell.peek()) {
                    sell.pop();
                    sell.push(p);
                } else if (p < sell.peek() - k) {
                    buy.push(p);
                }
            } else { // buy.size () > sell.size()
                if (p - k > buy.peek()) {
                    sell.push(p);
                } else if (p < buy.peek()) {
                    buy.pop();
                    buy.push(p);
                }
            }
        }
        if (buy.size() > sell.size()) {
            buy.pop();
        }
        int res = 0;
        while (!buy.empty()) {
            int b = buy.pop();
            int s = sell.pop();
            // if (s - b - k > 0)
                res += (s - b - k);
        }
        return res;
    }
}
