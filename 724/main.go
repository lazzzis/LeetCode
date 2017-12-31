func pivotIndex(nums []int) int {
	if len(nums) < 1 {
		return -1
	}
	right := make([]int, len(nums))
	right[len(right)-1] = 0
	for i := len(nums) - 2; i >= 0; i-- {
		right[i] = right[i+1] + nums[i+1]
	}
	sum := 0
	for i, v := range nums {
		if sum == right[i] {
			return i
		}
		sum += v
	}
	return -1
}
