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
    let set: Set<string> = new Set();
     let left: number = 0;
     let maxSize: number = 0;
 
     if (s.length === 0) return 0;
     if (s.length === 1) return 1;
 
     for (let i = 0; i < s.length; i++) {
 
         while (set.has(s[i])) {
             set.delete(s[left])
             left++;
         }
         set.add(s[i]);
         maxSize = Math.max(maxSize, i - left + 1)
     }
     
     return maxSize;
 }

console.log(lengthOfLongestSubstring("pwwkew"));
