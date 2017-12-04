import java.util.*;

public   class NestedIterator implements Iterator<Integer> {
        private Stack<NestedInteger> stack;

        public NestedIterator(List<NestedInteger> nestedList) {
            this.stack = new Stack<>();
            for (int i = nestedList.size() - 1; i >= 0; i--) {
                this.stack.push(nestedList.get(i));
            }
        }

        @Override
        public Integer next() {
            return stack.pop().getInteger();
        }

        @Override
        public boolean hasNext() {
            while (!stack.empty()) {
                NestedInteger cur = stack.peek();
                if (cur.isInteger()) return true;
                stack.pop();
                for (int i = cur.getList().size() - 1; i >= 0; i--) {
                    stack.push(cur.getList().get(i));
                }
            }
            return false;
        }
}
