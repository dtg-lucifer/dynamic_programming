function cancellable(fn: Function, args: any[], t: number): Function {
    fn(...args);
    const timerId = setInterval(() => fn(...args), t)
    return () => clearInterval(timerId)
};