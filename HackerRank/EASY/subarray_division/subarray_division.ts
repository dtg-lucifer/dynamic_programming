function birthday(s: number[], d: number, m: number) {
    let count: number = 0;
    let sum: number = 0;

    if (s.length === 1 && m === 1 && s[0] === d) return 1;

    s.forEach((_, i, arr) => {
        sum = arr.slice(i, i + m).reduce((prev, curr) => {
            return prev + curr;
        });
        if (sum === d) {
            count++;
        }
    });

    return count;
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2));
