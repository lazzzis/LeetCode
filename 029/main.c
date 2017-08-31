#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

int divide(int dividend, int divisor) {
    if (divisor == 0) {
        return INT_MAX;
    }

    if (dividend == INT_MIN) {
        if (divisor == -1) {
            return INT_MAX;
        } else if (divisor == 1) {
            return INT_MIN;
        }
    }

    if (dividend == INT_MAX) {
        if (divisor == 1) {
            return INT_MAX;
        } else if (divisor == -1) {
            return -dividend;
        }
    }

    long long first = (long long) dividend;
    long long second = (long long) divisor;
    int sign = (first >= 0 && second > 0) || (first < 0 && second < 0);
    sign = sign == 0 ? -1 : sign;
    first = llabs(first);
    second = llabs(second);
    int res = 0;
    while (first >= second) {
        long long i = 0;
        while (first > (second << (i + 1))) {
            i += 1;
        }
        res += (1 << i);
        first = first - (second << i);
    }
    return res * sign;
}

int main(int argc, char const *argv[]) {
    printf("%d\n", divide(36, 3));
    printf("%d\n", divide(-36, 3));
    printf("%d\n", divide(38, 3));
    printf("%d\n", divide(2, 3));
    printf("%d\n", divide(-38, 3));
    printf("%d\n", divide(-39, 3));
    printf("%d\n", divide(0, 3));
    printf("%d\n", divide(4, 2));
    printf("%d\n", divide(2147483647, 2));
    printf("%d\n", divide(-2147483648, 2));
    return 0;
}
