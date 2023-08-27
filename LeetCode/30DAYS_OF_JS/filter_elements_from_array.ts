function filter(arr: number[], fn: (n: number, i: number) => any): number[] {
    const newArr: typeof arr | Array<number> = [];

    for (const i in arr) {
        if (Boolean(fn(arr[i], Number(i)))) {
            newArr.push(arr[i])
        } else {
            continue
        }
    }

    return newArr;
};

console.log(filter([10, 10, 20, 30, 50, 80], (el, i) => el === 10 && i === 0));