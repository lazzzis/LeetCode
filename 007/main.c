#include <stdio.h>

int reverse(int x) {
    long long INT_MAX = 2147483647;
    long long INT_MIN = -2147483648;
    int positive = x >= 0 ? 1 : -1;
    long long ori = x >= 0 ? x : -1 * (long long)x;
    long long ans = 0;
    while (ori) {
        ans = ans * 10 + ori % 10;
        ori /= 10;
    }
    ans = positive * ans;
    if (positive > 0 && ans >= INT_MAX) {
        return 0;
    } else if (positive < 0 && ans <= INT_MIN) {
        return 0;
    }
    return ans;
}

int main(int argc, char const *argv[]) {
    printf("%d\n", reverse(1230));
    return 0;
}
