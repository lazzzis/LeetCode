func isOneBitCharacter(bits []int) bool {
	if len(bits) <= 1 {
		return true
	}
	i := 0
	for i < len(bits) {
		if bits[i] == 1 {
			i += 2
			if i >= len(bits) {
				return false
			}
		} else {
			i++
		}
	}
	return true
}
