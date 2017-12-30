func countPrimes(n int) int {
	notPrimes := make([]bool, n)
	count := 0
	for i := 2; i < n; i++ {
		if notPrimes[i] == false {
			count++
			for j := 2; i*j < n; j++ {
				notPrimes[i*j] = true
			}
		}
	}
	return count
}
