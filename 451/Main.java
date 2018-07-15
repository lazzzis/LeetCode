import java.util.Arrays;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Map;

public class SortCharactersByFrequency451 {
    class Solution {
        public String frequencySort(String s) {
            HashMap<Character, Item> map = new HashMap<>();
            for (char c : s.toCharArray()) {
                Item item = map.getOrDefault(c, new Item());
                item.freq++;
                item.c = c;
                map.put(c, item);
            }
            Item items[] = new Item[map.size()];
            int i = 0;
            for (Map.Entry<Character, Item> entry : map.entrySet()) {
                items[i++] = entry.getValue();
            }
            Arrays.sort(items, Comparator.comparingInt(x -> -x.freq));
            StringBuilder sb = new StringBuilder("");
            for (Item item : items) {
                while (item.freq > 0) {
                    sb.append(item.c);
                    item.freq--;
                }
            }
            return sb.toString();
        }

        class Item {
            char c;
            int freq = 0;
        }
    }
}
