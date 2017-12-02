class Solution {
    public List<Integer> topKFrequent(int[] nums, int k) {
        List<Integer>[] list = new List[nums.length - k + 10];
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int i : nums) {
            map.put(i, map.containsKey(i) ? map.get(i) + 1 : 1);
        }
        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            int n = entry.getKey(), f = entry.getValue();
            if (list[f] == null) list[f] = new LinkedList<>();
            list[f].add(n);
        }
        List<Integer> ans = new LinkedList<>();
        for (int i = nums.length - k + 1; i >= 0; i--) {
            if (list[i] == null) continue;
            ans.addAll(list[i]);
            if (ans.size() >= k) break;
        }
        return ans;
    }
}
