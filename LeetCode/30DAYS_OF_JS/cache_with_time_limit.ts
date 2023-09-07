interface MapRefs {
	val: number
	ref: ReturnType<typeof setTimeout>
}

class TimeLimitedCache {

	cacheMap: Map<number, MapRefs>

    constructor() {
		this.cacheMap = new Map<number, MapRefs>()
    }

    set(key: number, value: number, duration: number): boolean {

		const isExist = this.cacheMap.has(key)
		if (isExist) clearTimeout(this.cacheMap.get(key)?.ref)
		this.cacheMap.set(key, {
			val: value,
			ref: setTimeout(() => this.cacheMap.delete(key), duration)
		})

		return isExist
    }

    get(key: number): number {
		return this.cacheMap.has(key) ? this.cacheMap.get(key)!.val : -1
    }

	count(): number {
        return this.cacheMap.size
    }
}

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */