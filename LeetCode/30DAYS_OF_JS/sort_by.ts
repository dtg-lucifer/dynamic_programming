function sortBy(arr: any[], fn: Function): any[] {
	return Array.from(arr.sort((a, b) => !(fn(a) > fn(b)) ? -1 : 1))
};