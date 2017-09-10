#include <iostream>
#include <cstring>
#include <cstdlib>
#include <cmath>
#include <map>
#include <set>
#include <queue>
#include <algorithm>
#include <vector>

using namespace std;

class Solution {
public:
    int arrayNesting(vector<int>& nums) {
        int maxx = 1;
        bool vis[nums.size() + 10];
        memset(vis, false, sizeof(vis));
        for (int i = 0; i < nums.size(); i ++) {
            int step = 0;
            int j = i;
            while (!vis[j]) {
                vis[j] = 1;
                j = nums[j];
                step += 1;
            }
            maxx = max(maxx, step);
        }
        return maxx;
    }
};

#ifdef LZS
int main() {
    Solution s;
    [& s] () {
        std::vector<int> v {5,4,0,3,1,6,2};
        cout << s.arrayNesting(v) << endl;
    }();

    [& s] () {
        std::vector<int> v {0, 1, 2};
        cout << s.arrayNesting(v) << endl;
    }();

    [& s] () {
        std::vector<int> v {1, 2, 0};
        cout << s.arrayNesting(v) << endl;
    }();
    return 0;
}
#endif
