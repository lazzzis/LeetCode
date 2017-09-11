#include <iostream>
#include <cstring>
#include <cstdlib>
#include <cmath>
#include <map>
#include <set>
#include <queue>
#include <algorithm>
#include <vector>
#include <cassert>
#include <unordered_map>

using namespace std;

class Solution {
public:
    int subarraySum(vector<int>& nums, int k) {
        int sum = 0;
        unordered_map<int, int> m;
        int ans = 0;
        m[0] = 1;
        for (int i = 0; i < nums.size(); i ++) {
            sum += nums[i];
            ans += m[sum - k];
            m[sum] ++;
        }
        return ans;
    }
};

#ifdef LZS
int main() {
    Solution s;
    [& s] () {
        std::vector<int> v {0, 0, 0, 1, 0, 0, 0};
        assert(s.subarraySum(v, 1) == 16);
    }();
    [& s] () {
        std::vector<int> v {1, 1, 1};
        assert(s.subarraySum(v, 1) == 3);
    }();
    [& s] () {
        std::vector<int> v {1, 1, 1};
        assert(s.subarraySum(v, 2) == 2);
    }();
    [& s] () {
        std::vector<int> v {1, 1, 1};
        assert(s.subarraySum(v, 3) == 1);
    }();
    [& s] () {
        std::vector<int> v {0, 0, 0, 1, 0, 0, 0};
        assert(s.subarraySum(v, 0) == 12);
    }();
    [& s] () {
        std::vector<int> v {0, 0, 2, 1, 0, 0, 0};
        assert(s.subarraySum(v, 10) == 0);
    }();
    cout << "passed!" << endl;
    return 0;
}
#endif
