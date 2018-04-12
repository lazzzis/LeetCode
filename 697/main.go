import "sort"

type Unit struct {
	index int
	val   int
}

func findShortestSubArray(nums []int) int {
	arr := []Unit{}
	for i, v := range nums {
		arr = append(arr, Unit{
			i, v,
		})
	}
	sort.Slice(arr, func(i, j int) bool {
		if arr[i].val == arr[j].val {
			return arr[i].index < arr[j].index
		}
		return arr[i].val < arr[j].val
	})
	i, j := 0, 0
	maxCnt, minLen := 0, len(nums)
	for i < len(nums) {
		for j < len(nums) && arr[i].val == arr[j].val {
			j += 1
		}

		if maxCnt < j-i {
			maxCnt = j - i
			minLen = arr[j-1].index - arr[i].index + 1
		} else if maxCnt == j-i && minLen > arr[j-1].index-arr[i].index+1 {
			minLen = arr[j-1].index - arr[i].index + 1
		}

		i = j
	}
	return minLen
}
