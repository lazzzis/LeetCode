class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> ans = new LinkedList<>();
        Arrays.sort(nums);
        for (int i = 0; i < nums.length - 1; i++) {
            if (i != 0 && nums[i] == nums[i - 1]) continue;
            List<List<Integer>> list = helper(nums, i + 1, -nums[i]);
            ans.addAll(list);
        }
        return ans;
    }

    private List<List<Integer>> helper (int[] nums, int start, int target) {
        List<List<Integer>> list = new LinkedList<>();
        int i = start;
        int j = nums.length - 1;
        while (i < j) {
            if (nums[i] + nums[j] == target) {
                List<Integer> l = new LinkedList<>();
                l.add(nums[i]);
                l.add(nums[j]);
                l.add(-target);
                i++;
                list.add(l);
                while (i < nums.length - 1 && nums[i - 1] == nums[i]) i++;
            } else if (nums[i] + nums[j] < target) {
                i++;
            } else {
                j--;
            }
        }
        return list;
    }
}
