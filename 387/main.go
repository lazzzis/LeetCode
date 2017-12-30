func firstUniqChar(s string) int {
	counts := make(map[rune]int)
	for _, v := range s {
		counts[v]++
	}
	for k, v := range s {
		if counts[v] == 1 {
			return k
		}
	}
	return -1
}
