function join(arr1: any[], arr2: any[]): any[] {
    const map = new Map();
    
    for (const obj of arr1) {
        map.set(obj.id, obj);
    }
    
    for (const obj of arr2) {
        if (map.has(obj.id)) {
            const existingObj = map.get(obj.id);
            map.set(obj.id, { ...existingObj, ...obj });
        } else {
            map.set(obj.id, obj);
        }
    }    
    
    return Array.from(map.values()).sort((a, b) => parseInt(a.id) - parseInt(b.id));
}


console.log(join(
	[
		{ id: 3, name: "Andrew" },
		{ id: 1, name: "John" },
		{ id: 2, name: "Mary" },
	],
	[
		{ id: 1, age: 24 },
		{ id: 4, age: 32 },
		{ id: 2, age: 18 },
	]
))