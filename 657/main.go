func judgeCircle(moves string) bool {
	x, y := 0, 0
	for _, v := range moves {
		switch v {
		case 'U':
			x += 1
		case 'D':
			x -= 1
		case 'L':
			y -= 1
		case 'R':
			y += 1
		}
	}
	return x == 0 && y == 0
}
