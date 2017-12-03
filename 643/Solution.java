class Solution {
    public double findMaxAverage(int[] nums, int k) {
        long sum = 0;
        double ans = 0.0;
        for (int i = 0; i < k; i ++) {
            sum += nums[i];
        }
        ans = sum * 1.0 / k;
        for (int i = k; i < nums.length; i++) {
            sum = sum - nums[i - k] + nums[i];
            ans = Math.max(ans, sum * 1.0 / k);
        }
        return ans;
    }
}
