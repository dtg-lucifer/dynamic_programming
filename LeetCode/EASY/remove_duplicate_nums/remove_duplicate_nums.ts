function removeDuplicates(nums: number[]): number {
	const uniqueSet: Set<number> = new Set([...nums])
	const uniqueArr = Array.from(uniqueSet)
	return uniqueArr.length
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))