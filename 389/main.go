func findTheDifference(s string, t string) byte {
	counts := make(map[rune]int)
	for _, k := range s {
		counts[k]++
	}
	tCounts := make(map[rune]int)
	for _, k := range t {
		if counts[k] == 0 {
			return byte(k)
		}
		tCounts[k]++
	}
	for k, v := range counts {
		if tCounts[k] > v {
			return byte(k)
		}
	}
	return byte(0)
}
