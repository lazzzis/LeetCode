class Solution {
    public boolean checkSubarraySum(int[] nums, int k) {
        if (k < 0) k = -k;
        if (nums.length <= 1) return false;
        if (k == 1 && nums.length >= 2) return true;
        Map<Integer, Integer> map = new HashMap<>();
        map.put(0, -1);
        int sum = 0;
        for (int i = 0; i < nums.length; i++) {
            sum += nums[i];
            if (k == 0) {
                if (map.containsKey(sum) && i - map.get(sum) >= 2) {
                    return true;
                }
            } else {
                int n = sum;
                while (n >= 0) {
                    if (map.containsKey(n) && i - map.get(n) >= 2) {
                        return true;
                    }
                    n -= k;
                }
            }
            if (!map.containsKey(sum)) map.put(sum, i);
        }
        return false;
    }
}
