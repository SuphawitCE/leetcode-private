/*
You're given strings jewels representing the types of stones that are jewels, 
and stones representing the stones you have. Each character in stones is a type of stone you have. 
You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3

Input: jewels = "z", stones = "ZZ"
Output: 0

*/

const solve = (jewels, stones) => {
    let ans = 0;
    let jew = jewels;
    let s = stones;

    for(let i = 0;i < jew.length;i++) {
        for(let j = 0;j < s.length;j++) {
            if(jew.charAt(j) === s.charAt(i)) {
                ++ans;
            }
        }
    }

    return ans;
}

console.log(solve('aA', "aAAbbbb"));
console.log(solve('z', 'zz'));