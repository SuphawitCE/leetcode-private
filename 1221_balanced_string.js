/*
Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

Given a balanced string s, split it in the maximum amount of balanced strings.

Return the maximum amount of split balanced strings.

Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", 
each substring contains same number of 'L' and 'R'.

Input: s = "RLLLLRRRLR"
Output: 3
Explanation: s can be split into "RL", "LLLRRR", "LR", 
each substring contains same number of 'L' and 'R'.

Input: s = "LLLLRRRR"
Output: 1
Explanation: s can be split into "LLLLRRRR".

Input: s = "RLRRRLLRLL"
Output: 2
Explanation: s can be split into "RL", "RRRLLRLL", since 
each substring contains an equal number of 'L' and 'R'
*/

const solve = (str) => {
    let ans = 0;
    let count = 0;
    for(let i = 0;i < str.length;i++) {
        if(str[i] === 'R') {
            ++count;
            console.log('f', count);
        } else {
            console.log('e', count);
            --count;
        }
        console.log(count);
        if(count === 0) ++ans;
    }

    return ans;
}

console.log(solve("RLRRLLRLRL"));
// console.log(solve("RLLLLRRRLR"));
// console.log(solve("LLLLRRRR"));
// console.log(solve("RLRRRLLRLL"));