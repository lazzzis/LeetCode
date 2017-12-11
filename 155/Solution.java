class MinStack {

    private Stack<Integer> stack;// = new Stack<>();
    private Stack<Integer> minStack;// = new Stack<>();

    /** initialize your data structure here. */
    public MinStack() {
        this.stack = new Stack<>();
        this.minStack = new Stack<>();
    }

    public void push(int x) {
      this.stack.push(x);
      if (this.minStack.isEmpty()) {
        this.minStack.push(x);
      } else {
        if (x < this.minStack.peek()) {
          this.minStack.push(x);
        } else {
          this.minStack.push(this.minStack.peek());
        }
      }
    }

    public void pop() {
      this.stack.pop();
      this.minStack.pop();
    }

    public int top() {
        return this.stack.peek();
    }

    public int getMin() {
        return this.minStack.peek();
    }
}
