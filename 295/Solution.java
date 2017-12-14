class MedianFinder {
    PriorityQueue<Integer> left;
    PriorityQueue<Integer> right;
    /** initialize your data structure here. */
    public MedianFinder() {
        this.left = new PriorityQueue<>(1, (x, y) -> -(x - y));
        this.right = new PriorityQueue<>();
    }

    public void addNum(int num) {
        if (this.left.size() == 0) {
            this.left.offer(num);
            return;
        }
        if (this.left.size() == this.right.size()) {
            this.left.offer(num);
            if (this.left.peek() > this.right.peek()) {
                int t = this.right.poll();
                this.right.offer(this.left.poll());
                this.left.offer(t);
            }
        } else {
            this.right.offer(num);
            if (this.right.peek() < this.left.peek()) {
                int t = this.right.poll();
                this.right.offer(this.left.poll());
                this.left.offer(t);
            }
        }
    }

    public double findMedian() {
        if (this.left.size() == this.right.size()) {
            return (this.left.peek() + this.right.peek()) * 0.5;
        } else {
            return this.left.peek() * 1.0;
        }
    }
}
