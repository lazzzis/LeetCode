class Solution {
    public List<Integer> findClosestElements(int[] arr, int k, int x) {
        Queue<Integer> q = new LinkedList<>();
        for (int i = 0; i < k; i++) {
            q.offer(arr[i]);
        }
        for (int i = k; i < arr.length; i++) {
            int cur = arr[i];
            int head = q.peek();
            if (Math.abs(cur - x) < Math.abs(head - x)) {
                q.poll();
                q.offer(cur);
            } else {
                break;
            }
        }
        return new LinkedList<>(q);
    }
}
