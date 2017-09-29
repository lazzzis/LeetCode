// http://www.cnblogs.com/lanxuezaipiao/p/3452579.html
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
    string longestPalindrome(string s) {
        string newS = "#";
        for (auto ch : s) {
            newS.push_back(ch); newS.push_back('#');
        }
        string other(newS, 0, newS.length());
        vector<int> p (other.length() + 10, 0);
        int mx = 0, id = 0;
        int maxLen = 0, ansId;
        for (auto i = 1; i < other.length(); i++) {
            p[i] = i < mx ? min(p[2 * id - i], mx - i) : 1;
            while (i - p[i] >= 0 && i + p[i] < other.length() &&other[i + p[i]] == other[i - p[i]]) {
                p[i] ++;
            };
            if (i + p[i] > mx) {
                mx = i + p[i];
                id = i;
            }
            if (p[i] > maxLen) {
                maxLen = p[i];
                ansId = i;
            }
        }
        string res = "";
        for (auto i = ansId - maxLen + 1; i < ansId + maxLen; i ++)
            if (other.at(i) != '#')
                res.push_back(other[i]);
        return res;
    }
};

#ifdef LZS
int main() {
    Solution s;
    cout << s.longestPalindrome("babad") << endl;
    cout << s.longestPalindrome("cbbd") << endl;
    cout << s.longestPalindrome("cbd") << endl;
    cout << s.longestPalindrome("b") << endl;
    cout << s.longestPalindrome("a") << endl;
    cout << s.longestPalindrome("aaaaaac") << endl;
    return 0;
}
#endif
