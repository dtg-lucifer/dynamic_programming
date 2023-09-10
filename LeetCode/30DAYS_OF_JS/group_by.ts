declare global {
    interface Array<T> {
        groupBy(fn: (item: T) => string): Record<string, T[]>
    }
}

Array.prototype.groupBy = function<T>(fn: (item: T) => string) {
    const returnObject: Record<string, T[]> = {};

    for (const item of this) {
      const key = fn(item);

      if (key in returnObject) {
        returnObject[key].push(item);
      } else {
        returnObject[key] = [item];
      }
    }

    return returnObject;
  };

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

console.log([1,2,3,1,1,1,2,3,3].groupBy(item => String(item === 2)))

export {}