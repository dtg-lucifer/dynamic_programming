// function lengthOfLongestSubstring(s: string): number {
//     let str: string = "";
//     let subStr: Array<number> = [];

//     if (s === "") return 0

//     for (let char of s) {
//         if (!str.includes(char)) {
//             str += char;
//             continue;
//         }

//         if (str.includes(char)) {
//             subStr.push(str.length);
//             str = "";
//             str += char;
//             continue;
//         }
//     }

//     return subStr.sort((a, b) => b - a)[0];
// }

function lengthOfLongestSubstring(s: string): number {
    const scanner: Array<string> = [];
    let longest: number = 0;

    for (const char of s) {
        const index = scanner.indexOf(char);

        if (index !== -1) scanner.splice(0, index + 1)

        scanner.push(char)
        longest = Math.max(longest, scanner.length)
    }

    return longest
}

console.log(lengthOfLongestSubstring("pwwkew"));
