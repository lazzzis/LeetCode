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

class Solution {
public:
    int minSubArrayLen(int s, vector<int>& nums) {
        if (nums.size() == 0) return 0;
        if (nums.size() == 1) return nums[0] == s;
        int head = 1, rear = 0;
        int sum = nums[0], minLen = nums.size() + 1;

        while (head < nums.size()) {
            while (head < nums.size() && sum < s) {
                sum += nums[head ++];
            }
            while (rear < head && sum >= s) {
                minLen = min(head - rear, minLen);
                sum -= nums[rear ++];
            }
        }

        return minLen == nums.size() + 1 ? 0 : minLen;
    }
};

#ifdef LZS
int main() {
    Solution s;
    std::vector<int> v {7};
    cout << s.minSubArrayLen(7, v) << endl;
    return 0;
}
#endif
