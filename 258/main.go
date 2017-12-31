func addDigits(num int) int {
	s := 0
	for num != 0 {
		s += num % 10
		if s >= 10 {
			s = s/10 + s%10
		}
		num /= 10
	}
	return s
}
