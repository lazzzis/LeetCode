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
    vector<int> findDuplicates(vector<int>& nums) {
        std::vector<int> v;
        for_each(nums.begin(), nums.end(), [& nums, & v](int item) {
            item = abs(item);
            nums[item - 1] = -nums[item - 1];
            if (nums[item - 1] > 0) v.push_back(item);
        });

        return v;
    }
};

#ifdef LZS
int main() {
    Solution s;
    std::vector<int> b {4,3,2,7,8,2,3,1};
    vector <int> ans = s.findDuplicates(b);
    for_each(ans.begin(), ans.end(), [] (int item) {
        cout << item << endl;
    });
    return 0;
}
#endif
