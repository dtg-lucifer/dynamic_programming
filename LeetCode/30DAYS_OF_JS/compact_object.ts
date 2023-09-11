type Obj = Record<any, any>;

function compactObject(obj: Obj): Obj {
    if (typeof obj !== 'object' || obj === null) return obj;
	
    if (Array.isArray(obj)) return obj.reduce((acc, iter) => {
        if (!iter) return acc;
        acc.push(compactObject(iter));
        return acc;
    }, []);

    return Object.entries(obj).reduce((acc, [key, val]) => {
        if (val) acc[key] = compactObject(val);
        return acc;
    }, {});
};