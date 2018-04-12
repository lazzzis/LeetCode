import (
	"math"
	"strings"
)

func repeatedStringMatch(A string, B string) int {
	cnt := 1
	if len(A) < len(B) {
		cnt = int(math.Ceil(float64(len(B)) / float64(len(A))))
		A = strings.Repeat(A, cnt)
	}
	if strings.Index(A, B) == -1 {
		cnt++
		A = A + A
	}
	if strings.Index(A, B) == -1 {
		cnt = -1
	}
	return cnt
}
