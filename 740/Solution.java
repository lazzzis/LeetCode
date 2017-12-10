class Solution {
public int deleteAndEarn(int[] nums) {
        int used = 0;
        int avoided = 0;
        int[] cnt = new int[10000 + 5];
        for (int i : nums) {
                cnt[i]++;
        }
        for (int i = 1; i <= 10000; i++) {
                int oldUsed = used;
                used = avoided + cnt[i] * i;
                avoided = Math.max(oldUsed, avoided);
        }
        return Math.max(used, avoided);
}
}
