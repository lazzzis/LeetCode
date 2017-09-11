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

using namespace std;

typedef long long LL;

class Solution {
public:
    int findPoisonedDuration(vector<int>& timeSeries, int duration) {
        LL ans = 0;
        LL maxx = 0;
        for (LL t : timeSeries) {
            if (t + duration >= maxx) {
                ans += (t + duration - max(t, maxx));
                maxx = t + duration;
            }
        }
        return ans;
    }
};

#ifdef LZS
int main() {
    Solution s;
    std::vector<int> v {0, 1, 2};
    cout << s.findPoisonedDuration(v, 1) << endl;
    return 0;
}
#endif
