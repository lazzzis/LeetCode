class Solution {
  public int findMaxLength(int[] nums) {
    Map<Integer, Integer> map = new HashMap<>();
    map.put(0, -1);
    int count = 0;
    int maxLen = 0;
    for (int i = 0; i < nums.length; i++) {
      int num = nums[i];
      count = count + (num == 0 ? -1 : 1);
      if (map.containsKey(count)) {
        maxLen = Math.max(i - map.get(count), maxLen);
      } else {
        map.put(count, i);
      }
    }
    return maxLen;
  }
}
