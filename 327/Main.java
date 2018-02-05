import java.util.Map;
import java.util.TreeMap;

public class Main {
    class Solution {
        public int countRangeSum(int[] nums, int lower, int upper) {
            TreeMap<Long, Long> treeMap = new TreeMap();
            treeMap.put(0l, 1l);
            long sum = 0;
            long count = 0;
            for (int n : nums) {
                sum += n;
                long from = sum - upper;
                long to = sum - lower;
                Map<Long, Long> sub = treeMap.subMap(from, true, to, true);
                for (long value : sub.values()) {
                    count += value;
                }
                treeMap.put(sum, treeMap.getOrDefault(sum, 0l) + 1);
            }
            return (int)count;
        }
    }
}
