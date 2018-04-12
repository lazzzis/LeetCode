func checkPossibility(nums []int) bool {
	if len(nums) <= 2 {
		return true
	}
	cnts := 0
	for i := 1; i < len(nums); i++ {
		if nums[i] < nums[i-1] {
			cnts++
			if cnts > 1 {
				return false
			}
			if i == 1 || nums[i] >= nums[i-2] {
				continue
			}
			if i == len(nums)-1 || nums[i+1] >= nums[i-1] {
				continue
			}
			return false
		}
	}
	return true
}
