/*
Given a string s and an integer array indices of the same length.

The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

Return the shuffled string.

Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
Output: "leetcode"
Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

Input: s = "abc", indices = [0,1,2]
Output: "abc"
Explanation: After shuffling, each character remains in its position.

Input: s = "aiohn", indices = [3,1,4,2,0]
Output: "nihao"

Input: s = "aaiougrt", indices = [4,0,2,6,7,3,1,5]
Output: "arigatou"

Input: s = "art", indices = [1,0,2]
Output: "rat"
*/

const solve = (str, indices) => {
    let L = 0;
    let R = indices;
    // let ans = [];
    let ans = '';
    let i = 0;
    while(L < indices.length && R < str.length) {
        ans[indices[i]++] += str[L++];
        ans[indices[i]++] += str[R++];
        ++i;

    }



    // let ans = [];
    // let s = '';
    // for(let i = 0;i < str.length;i++) {
    //     ans[indices[i]] = str.charAt(i);
    //     // s += ans[indices[i]];
    // }
    // console.log(ans);

    // return s;
}

console.log(solve("codeleet", [4,5,6,7,0,2,1,3]));
// console.log(solve("abc", [0,1,2]));
// console.log(solve("aiohn", [3,1,4,2,0]));

