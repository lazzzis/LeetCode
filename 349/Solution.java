class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        Set<Integer> first = new HashSet<>();
        for (int i : nums1) {
            first.add(i);
        }
        Set<Integer> intersection = new HashSet<>();
        for (int i : nums2) {
            if (first.contains(i)) intersection.add(i);
        }
        int[] ans = new int[intersection.size()];
        int i = 0;
        for (int item : intersection) {
            ans[i++] = item;
        }
        return ans;
    }
}
