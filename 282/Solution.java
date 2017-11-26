class Solution {
    public List<String> addOperators(String num, int target) {
        List<String> ans = new LinkedList<>();
        if (num == null || num.length() == 0) return ans;
        dfs(num, "", 0, 0, 0, target, ans);
        return ans;
    }

    private void dfs (String num, String path, long tempRes, long lastNum, int index, int target, List<String> ans) {
        if (index == num.length()) {
            if (tempRes == target) {
                ans.add(path);
            }
            return;
        }
        long n = 0;
        int len = num.charAt(index) == '0' ? index + 1 : num.length();
        for (int i = index; i < len; i++) {
            n = n * 10 + Character.getNumericValue(num.charAt(i)) - Character.getNumericValue('0');
            if (index == 0) {
                dfs(num, "" + n, n, n, i + 1, target, ans);
                continue;
            }
            dfs(num, path + "+" + n, tempRes + n, n, i + 1, target, ans);
            dfs(num, path + "-" + n, tempRes - n, -n, i + 1, target, ans);
            dfs(num, path + "*" + n, tempRes + lastNum * n - lastNum, lastNum * n, i + 1, target, ans);
        }
    }
}
