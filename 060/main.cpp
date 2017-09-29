#include <iostream>
#include <cstring>
#include <cstdlib>
#include <cmath>
#include <map>
#include <set>
#include <queue>
#include <algorithm>
#include <unordered_map>
#include <vector>

typedef long long LL;

using namespace std;

class Solution {
public:
    string getPermutation(int n, int k) {
        std::vector<int> v(n);
        std::vector<int> flags(n, 1);
        int limit = k;
        int base = 1;
        for (int i = 1; i <= n - 1; i ++) {
            base *= i;
        }
        for (int i = n; i > 1; i --) {
            int j = ceil(1.0 * limit / base);
            v[i - 1] = findNth(flags, j);
            limit -= (j - 1) * base;
            base /= (i - 1);
        }

        v[0] = findNth(flags, 1);

        string s = "";
        for (auto num : v)
            s = char(num + '0') + s;
        return s;
    }
    int findNth(vector<int> &flags, int k) {
        int cnt = 0;
        for (int i = 0; i < flags.size(); i ++)
            if (flags[i]) {
                cnt ++;
                if (cnt == k) {
                    flags[i] = 0;
                    return i + 1;
                }
            }
    }
};

#ifdef LZS
int main() {
    Solution s;
    cout << s.getPermutation(3, 2) << endl;
    cout << s.getPermutation(3, 1) << endl;
    cout << s.getPermutation(4, 5) << endl;
    cout << s.getPermutation(4, 24) << endl;
    return 0;
}
#endif
