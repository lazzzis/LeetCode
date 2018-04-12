import "math"

func average(M [][]int, i, j int) int {
	dirs := [][]int{
		{1, 0},
		{-1, 0},
		{0, 1},
		{0, -1},
		{1, -1},
		{1, 1},
		{-1, 1},
		{-1, -1},
		{0, 0},
	}
	row, col := len(M), len(M[0])

	sum, cnt := 0, 0

	for _, dir := range dirs {
		x, y := i+dir[0], j+dir[1]
		if x >= 0 && x < row && y >= 0 && y < col {
			sum += M[x][y]
			cnt += 1
		}
	}
	return int(math.Floor(float64(sum) / float64(cnt)))
}

func imageSmoother(M [][]int) [][]int {
	row, col := len(M), len(M[0])
	ans := make([][]int, row)

	for i := 0; i < row; i++ {
		ans[i] = make([]int, col)
	}

	for i := 0; i < row; i++ {
		for j := 0; j < col; j++ {
			ans[i][j] = average(M, i, j)
		}
	}

	return ans
}
