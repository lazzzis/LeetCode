class Solution {
    private Map<Integer, List<Integer>> map;
    public Solution(int[] nums) {
        this.map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int n = nums[i];
            if (!map.containsKey(n)) map.put(n, new ArrayList<>());
            map.get(n).add(i);
        }
    }

    public int pick(int target) {
        List<Integer> list = map.get(target);
        return list.get((int) (Math.random() * list.size()));
    }
}
