class Solution2 {
    public List<String> addOperators(String num, int target) {
      List<String> ans = new LinkedList<String>();
      if (num.length() == 0) return ans;
      int n = num.charAt(0) - '0';
      helper(num, 1, n, target, n, 1, String.valueOf(n), ans);
      return ans;
    }
      public void helper (String num, long index, long cur, long target, long lastNum, long lastMul, String temp, List<String> ans) {
        if (index >= num.length()) {
          if (target == cur) {
            ans.add(temp);
          }
          return;
        }
        long n = num.charAt((int)index) - '0';
        helper(num, index + 1, cur + n, target, n, 1, temp + "+" + String.valueOf(n), ans);
        helper(num, index + 1, cur - n, target, n, -1, temp + "-" + String.valueOf(n), ans);
        //  -1 !!!

        helper(num, index + 1, cur - lastMul * lastNum + lastMul * lastNum * n, target, n, lastMul * lastNum, temp + "*" + String.valueOf(n), ans);
        if (lastNum == 0) {
          return;
        }
        helper(num, index + 1, cur - lastMul * lastNum + lastMul * (lastNum * 10 + n), target, lastNum * 10 + n, lastMul,
               temp + String.valueOf(n), ans);
    }
}
