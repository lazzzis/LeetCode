// https://www.youtube.com/watch?v=JtZBs9Qy_6M&list=PLH8TFsY0qnE2R9kf_9vahNY6pG9601z_4&index=49

#include <iostream>
#include <cstring>
#include <cstdlib>
#include <cmath>
#include <map>
#include <set>
#include <queue>
#include <algorithm>
#include <unordered_map>
#include <stack>
#include <vector>

typedef long long LL;

using namespace std;

class Solution {
public:
    int mySqrt(int x) {
        if (x <= 0) return 0;
        int cur = 1;
        int res = 1;
        int add = 1;
        while (cur <= x) {
            add += 2;
            if (INT_MAX - cur < add) return res;
            res += 1;
            cur += add;
        }
        return res - 1;
    }
};

#ifdef LZS
int main() {
    Solution s;
    for (int i = 0; i < 100; i++) {
        if (floor(sqrt(i)) != s.mySqrt(i)) {
            cout << i << " " << s.mySqrt(i) << endl;
        }
    }
    return 0;
}
#endif
