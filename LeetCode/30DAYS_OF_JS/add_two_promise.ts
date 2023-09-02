async function addTwoPromises(promise1: Promise<number>, promise2: Promise<number>): Promise<number> {
    return await Promise.all([promise1, promise2]).then(([one, two]) => one + two)
};

addTwoPromises(Promise.resolve(2), Promise.resolve(4)).then(console.log)