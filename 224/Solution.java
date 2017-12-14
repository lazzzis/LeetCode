
class Solution {
    public int calculate(String s) {
        s = s.replace(" ", "");
        Stack<String> stack = new Stack<>();
        int i = 0;
        while (i < s.length()) {
            if (s.charAt(i) == ')') {
                Stack<String> cal = new Stack<>();
                while (!stack.isEmpty() && !stack.peek().equals("(")) {
                    cal.push(stack.pop());
                }
                if (!stack.isEmpty() && stack.peek().equals("(")) stack.pop();
                int temp = Integer.parseInt(cal.pop());
                while (!cal.isEmpty()) {
                    String op = cal.pop();
                    if (op.equals("-")) {
                        temp -= Integer.parseInt(cal.pop());
                    } else {
                        temp += Integer.parseInt(cal.pop());
                    }
                }
                stack.push(temp + "");
            } else if (s.charAt(i) == '(') {
                stack.push("(");
            } else if (s.charAt(i) == '+') {
                stack.push("+");
            } else if (s.charAt(i) == '-') {
                stack.push("-");
            } else {
                int j = i;
                while (j < s.length() && Character.isDigit(s.charAt(j))) {
                    j++;
                }
                stack.push(s.substring(i, j));
                i = j - 1;
            }
            i++;
        }
        Stack<String> cal = new Stack<>();
        while (!stack.isEmpty()) {
            cal.push(stack.pop());
        }
        int temp = Integer.parseInt(cal.pop());
        while (!cal.isEmpty()) {
            String op = cal.pop();
            if (op.equals("-")) {
                temp -= Integer.parseInt(cal.pop());
            } else {
                temp += Integer.parseInt(cal.pop());
            }
        }
        stack.push(temp + "");
        return Integer.parseInt(stack.pop());
    }
}
