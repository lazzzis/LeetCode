import (
	"strconv"
	"strings"
)

func subdomainVisits(cpdomains []string) []string {
	counts := map[string]int{}
	for _, v := range cpdomains {
		patterns := strings.Split(v, " ")
		cps, _ := strconv.Atoi(patterns[0])
		domain := patterns[1]
		parts := strings.Split(domain, ".")
		temp := ""
		length := len(parts)
		for i := length - 1; i >= 0; i-- {
			temp = parts[i] + temp
			counts[temp] += cps
			temp = "." + temp
		}
	}
	var ans []string
	for domain, cps := range counts {
		ans = append(ans, strconv.Itoa(cps)+" "+domain)
	}
	return ans
}
