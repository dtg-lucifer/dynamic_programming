type F = (x: number) => number;

function compose(functions: F[]): F {

    if(functions.length === 0) return x => x

    return x => {
        for(const fn of functions.reverse()) {
            x = fn(x)
        }
        return x
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */