function isValid(s: string): boolean {
    const stack: Array<string> = [];
    const pairMap: Map<string, string> = new Map();
    const openings: Set<string> = new Set(["(", "{", "["]);
    let last: string;

    pairMap.set("(", ")");
    pairMap.set("[", "]");
    pairMap.set("{", "}");

    for (const char of s) {
        if (openings.has(char)) {
            stack.push(char);
			continue;
        }
		
		if (pairMap.has(stack[stack.length - 1])) {
            last = stack.pop()!;
            if (pairMap.get(last) !== char) return false;
			continue;
        }

		return false;
    }

    return stack.length === 0;
}

console.log(isValid("{}()()"));
console.log(isValid("()(){"));
console.log(isValid("{()}"));
