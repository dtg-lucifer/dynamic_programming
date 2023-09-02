type Fn = (...params: any) => any

function memoize(fn: Fn): Fn {
    const paramMap: Map<string, any> = new Map();

    return function(...args) {

        const params: string = JSON.stringify([...args])

        if (!paramMap.has(params)) {
            const res = fn(...JSON.parse(params));
            paramMap.set(params, res);
            return res;
        } else {
            return paramMap.get(params);
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */