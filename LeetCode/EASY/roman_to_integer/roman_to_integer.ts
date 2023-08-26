function romanToInt(s: string): number {
    const valueMap: Map<string, number> = new Map([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000],
    ])

    let ans: number = 0;

	for (let i = 0; i < s.length; i++) {
		let curr = valueMap.get(s.charAt(i)) ?? 0
		let next = valueMap.get(s.charAt(i + 1)) ?? 0

		if (curr >= next) ans += curr

		if (curr < next) {
			ans += (next - curr)
			i++
		}
	}

	return ans
};

console.log(romanToInt("III"))
console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"))