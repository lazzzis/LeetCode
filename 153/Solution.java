class Solution {
    public int findMin(int[] nums) {
        if (nums[0] <= nums[nums.length - 1]) return nums[0];
        int left = 0;
        int right = nums.length - 1;
        while (left < right - 1) {
            int mid = left + ((right - left) >> 1);
            int mv = nums[mid];
            if (mv > nums[left] && mv > nums[right]) {
                left = mid;
            } else {
                right = mid;
            }
        }
        if (nums[left] > nums[right]) return nums[right];
        return nums[left];
    }
}
