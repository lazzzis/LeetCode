class Solution {
    public boolean increasingTriplet(int[] nums) {
        int[] leftMin = new int[nums.length];
        int[] rightMax = new int[nums.length];
        int lMin = Integer.MAX_VALUE;
        int rMax = Integer.MIN_VALUE;
        for (int i = 0; i < leftMin.length; i++) {
            leftMin[i] = lMin;
            lMin = Math.min(lMin, nums[i]);
        }
        for (int j = rightMax.length - 1; j >= 0; j--) {
            rightMax[j] = rMax;
            rMax = Math.max(rMax, nums[j]);
        }
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] > leftMin[i] && nums[i] < rightMax[i]) return true;
        }
        return false;
    }
}
