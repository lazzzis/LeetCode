import java.util.HashMap;
import java.util.LinkedList;
import java.util.Map;

public class MostFrequentSubtreeSum508 {
    class Solution {

        int maxx = Integer.MIN_VALUE;
        HashMap<Integer, Integer> map;

        public int[] findFrequentTreeSum(TreeNode root) {
            this.map = new HashMap<>();
            maxx = Integer.MIN_VALUE;
            if (root == null) {
                return new int[0];
            }
            helper(root);
            for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
                int freq = entry.getValue();
                if (freq > maxx) {
                    maxx = freq;
                }
            }
            LinkedList<Integer> list = new LinkedList<>();
            for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
                int sum = entry.getKey();
                int freq = entry.getValue();
                if (freq == maxx) {
                    list.add(sum);
                }
            }

            int arr[] = new int[list.size()];
            int index = 0;
            for (int val : list) {
                arr[index ++] = val;
            }

            return arr;
        }

        public int helper (TreeNode root) {
            if (root == null) {
                return 0;
            }
            int sum = root.val
                    + helper(root.left)
                    + helper(root.right);
            int freq = this.map.getOrDefault(sum, 0) + 1;
            this.map.put(sum, freq);
            return sum;
        }
    }

}
