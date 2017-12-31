// 2 ^ a * 5 ^ b * 3 ^ c
func isUgly(num int) bool {
	if num <= 0 {
		return false
	}
	primes := []int{2, 3, 5}
	for _, prime := range primes {
		for num%prime == 0 {
			num /= prime
		}
	}
	return num == 1
}
