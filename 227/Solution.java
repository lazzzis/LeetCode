class Solution {
    public int calculate(String s) {
        s = s.replace(" ", "");
        ArrayList<String> list = new ArrayList<>();
        int i = 0;
        while (i < s.length()) {
            if (!Character.isDigit(s.charAt(i))) {
                list.add(String.valueOf(s.charAt(i)));
            } else {
                int j = i;
                while (j < s.length() && Character.isDigit(s.charAt(j))) { j++; }
                list.add(s.substring(i, j));
                i = j - 1;
            }
            i++;
        }
        i = 0;
//        list.forEach(System.out::println);
        LinkedList<String> l2 = new LinkedList<>();
        while (i < list.size()) {
            String item = list.get(i);
            if (item.equals("*") || item.equals("/")) {
                int temp = Integer.parseInt(l2.remove(l2.size() - 1));
                int next = Integer.parseInt(list.get(i + 1));
                if (item.equals("*")) temp *= next;
                else temp /= next;
                l2.add(temp + "");
                i++;
            } else {
                l2.add(item);
            }
            i++;
        }
//        l2.forEach(System.out::println);
        int temp = Integer.parseInt(l2.remove(0));
        while (l2.size() > 0) {
            String op = l2.remove(0);
            int next = Integer.parseInt(l2.remove(0));
            if (op.equals("+")) temp += next;
            else temp -= next;
        }
        return temp;
    }
}
