func dominantIndex(nums []int) int {
	if len(nums) <= 1 {
		return 0
	}
	max, index := -1, 0
	for k, v := range nums {
		if v > max {
			max, index = v, k
		}
	}
	for k, v := range nums {
		if k != index && max < v*2 {
			return -1
		}
	}
	return index
}
