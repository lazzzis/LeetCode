class Solution {
    public int subarraySum(int[] nums, int k) {
        int ans = 0;
        Map<Integer, Integer> map = new HashMap<>();
        map.put(0, 1);
        int tempSum = 0;
        for (int i : nums) {
            tempSum += i;
            ans += map.getOrDefault(tempSum - k, 0);
            map.put(tempSum, map.getOrDefault(tempSum, 0) + 1);
        }
        return ans;
    }
}
