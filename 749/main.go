import "unicode"

func shortestCompletingWord(licensePlate string, words []string) string {
	license := map[rune]int{}
	for _, v := range licensePlate {
		if unicode.IsLetter(v) {
			license[unicode.ToLower(v)]++
		}
	}
	ans := ""
	length := 10000
	for _, v := range words {
		word := map[rune]int{}
		for _, c := range v {
			if unicode.IsLetter(c) {
				word[unicode.ToLower(c)]++
			}
		}
		if completed(license, word) {
			if len(v) < length {
				length = len(v)
				ans = v
			}
		}
	}
	return ans
}

func completed(license map[rune]int, word map[rune]int) bool {
	for k, v := range license {
		if word[k] == 0 || v > word[k] {
			return false
		}
	}
	return true
}
