import java.util.*;

class Solution {

  public static void main (String[] args) {
    Solution s = new Solution();
    s.restoreIpAddresses("010010").forEach(System.out::println);
  }
    public List<String> restoreIpAddresses(String s) {
      List<String> ans = new LinkedList<>();
      if (s.length() > 12) return ans;
      int len = s.length();
      for (int i = 1; i < len - 2; i++) {
        for (int j = i + 1; j < len - 1; j++) {
          for (int k = j + 1; k < len; k++) {
            String first = s.substring(0, i);
            String second = s.substring(i, j);
            String third = s.substring(j, k);
            String fourth = s.substring(k, len);
            if (isValid(first) && isValid(second) && isValid(third) && isValid(fourth))
              ans.add(first + "." + second + "." + third + "." + fourth);
          }
        }
      }
      return ans;
    }

  private boolean isValid (String s) {
    if (s.length() > 1 && s.charAt(0) == '0') return false;
    if (s.length() > 0 && s.length() < 4 && Integer.parseInt(s) <= 255 ) return true;
    return false;
  }

}
