class Solution {
    public int[] maxSumOfThreeSubarrays(int[] nums, int k) {
        Node[] lefts = new Node[nums.length];
        int[] subSums = new int[nums.length];
        int tempSum = 0;
        for (int i = 0; i < k; i++) {
            tempSum += nums[i];
        }
        int maxVal = tempSum;
        int maxValId = 0;
        lefts[0] = new Node(tempSum, 0);
        subSums[0] = tempSum;
        for (int i = 1; i < nums.length - k; i++) {
            tempSum = tempSum - nums[i - 1] + nums[i + k - 1];
            if (maxVal < tempSum) {
                maxVal = tempSum;
                maxValId = i;
            }
            subSums[i] = tempSum;
            lefts[i] = new Node(maxVal, maxValId);
        }
        Node[] rights = new Node[nums.length];
        tempSum = 0;
        for (int i = nums.length - 1; i >= nums.length - k; i--) {
            tempSum += nums[i];
        }
        rights[nums.length - k] = new Node(tempSum, nums.length - k);
        maxVal = tempSum;
        maxValId = nums.length - k;
        for (int i = nums.length - k - 1; i >= 0; i--) {
            tempSum = tempSum + nums[i] - nums[i + k];
            if (maxVal <= tempSum) {
                maxVal = tempSum;
                maxValId = i;
            }
            rights[i] = new Node(maxVal, maxValId);
        }
        maxVal = 0;
        int[] res = new int[3];
        for (int i = k; i <= nums.length - k * 2; i++) {
            if (subSums[i] + lefts[i - k].value + rights[i + k].value > maxVal) {
                maxVal = subSums[i] + lefts[i - k].value + rights[i + k].value;
                res[0] = lefts[i - k].index;
                res[1] = i;
                res[2] = rights[i + k].index;
            }
        }
        return res;
    }

    class Node {
        int value;
        int index;

        public Node() {
        }

        public Node(int value, int index) {
            this.value = value;
            this.index = index;
        }
    }
}
