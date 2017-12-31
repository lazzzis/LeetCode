func nextGreatestLetter(letters []byte, target byte) byte {
	for _, b := range letters {
		if b > target {
			return b
		}
	}
	return letters[0]
}
