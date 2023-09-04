type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
    return async function (...args: any[]) {
        return new Promise<void>((res, rej) => {
            const timeoutID = setTimeout(() => rej("Time Limit Exceeded"), t)

            fn(...args)
                .then(data => res(data))
                .catch(e => rej(e))
                .finally(() => clearTimeout(timeoutID))
        })
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */