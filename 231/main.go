func isPowerOfTwo(n int) bool {
	for n != 0 {
		if n%2 != 0 {
			break
		}
		n /= 2
	}
	return n == 1
}
