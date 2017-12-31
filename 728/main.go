func isDividingNumber(num int) bool {
	ori := num
	for num != 0 {
		x := num % 10
		if x == 0 || ori%x != 0 {
			return false
		}
		num /= 10
	}
	return true
}

func selfDividingNumbers(left int, right int) []int {
	ans := []int{}
	for i := left; i <= right; i++ {
		if isDividingNumber(i) {
			ans = append(ans, i)
		}
	}
	return ans
}
