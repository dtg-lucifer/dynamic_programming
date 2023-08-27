function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    const newArr: typeof arr = [];

    for (const i in arr) {
        newArr.push(fn(arr[i], Number(i)))
    }

    return newArr
};