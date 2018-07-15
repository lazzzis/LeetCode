import java.util.ArrayList;
import java.util.HashMap;
import java.util.Random;

public class InsertDeleteGetRandom380 {
    class RandomizedSet {

        public Random rand;
        public ArrayList<Integer> list;
        public int last;
        public HashMap<Integer, Integer> map; // val : index

        /** Initialize your data structure here. */
        public RandomizedSet() {
            this.rand = new Random();
            this.list = new ArrayList<>();
            this.map = new HashMap<>();
            this.last = 0;
        }

        /** Inserts a value to the set. Returns true if the set did not already contain the specified element. */
        public boolean insert(int val) {
            if (this.map.containsKey(val)) {
                return false;
            }
            this.map.put(val, this.last);
            if (this.last >= this.list.size()) {
                this.list.add(val);
                this.last = this.list.size();
            } else {
                this.list.set(this.last++, val);
            }
            return true;
        }

        /** Removes a value from the set. Returns true if the set contained the specified element. */
        public boolean remove(int val) {
            if (!this.map.containsKey(val)) {
                return false;
            }
            int index = this.map.get(val);
            this.map.remove(val);
            int replaced = this.list.get(this.last - 1);
            if (replaced != val) {
                this.list.set(index, replaced);
                this.map.put(replaced, index);
            }
            this.last--;
            return true;
        }

        /** Get a random element from the set. */
        public int getRandom() {
            return this.list.get(
                    this.rand.nextInt(this.last)
            );
        }
    }
}
