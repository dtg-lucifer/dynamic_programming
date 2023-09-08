async function promiseAll<T>(functions: (() => Promise<T>)[]): Promise<T[]> {
    return new Promise<T[]>((res, rej) => {

        if (functions.length === 0) res([])

        const resolved: T[] = new Array(functions.length).fill(null)
        let resolvedCount: number = 0;

        functions.forEach((promise, i) => {
            promise()
                .then(data => {
                    resolved[i] = data
                    resolvedCount++
                    resolvedCount === functions.length && res(resolved)
                })
                .catch(err => rej(err))
        })
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */