func findPeakElement(nums []int) int {
	arr := []int{-1e10}
	arr = append(arr, nums...)
	arr = append(arr, -1e10)
	for i := 1; i < len(nums)+1; i++ {
		if arr[i] > arr[i-1] && arr[i] > arr[i+1] {
			return i - 1
		}
	}
	return 0
}
