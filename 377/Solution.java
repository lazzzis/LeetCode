class Solution {
    public int combinationSum4(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        map.put(0, 1);
        for (int i = 0; i <= target; i++) {
            int sum = 0;
            for (int n : nums) {
                sum += map.getOrDefault(i - n, 0);
            }
            if (sum != 0) {
                map.put(i, sum);
            }
        }
        return map.getOrDefault(target, 0);
    }
}
