func canConstruct(ransomNote string, magazine string) bool {
	ma, mb := make(map[rune]int), make(map[rune]int)
	for _, v := range ransomNote {
		ma[v]++
	}
	for _, v := range magazine {
		mb[v]++
	}
	for k, v := range ma {
		if v > mb[k] {
			return false
		}
	}
	return true
}
