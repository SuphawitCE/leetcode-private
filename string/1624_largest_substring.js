/*
https://iamketan.wordpress.com/2020/11/21/1624-largest-substring-between-two-equal-characters-leetcode/

Given a string s, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring return -1.

A substring is a contiguous sequence of characters within a string.

Input: s = "aa"
Output: 0
Explanation: The optimal substring here is an empty substring between the two 'a's.

Input: s = "abca"
Output: 2
Explanation: The optimal substring here is "bc".

Input: s = "cbzxy"
Output: -1
Explanation: There are no characters that appear twice in s.

Input: s = "cabbac"
Output: 4
Explanation: The optimal substring here is "abba". Other non-optimal substrings include "bb" and "".

*/

const solve = (s) => {

    if(new Set([ ...s]).size === s.length) {
        return -1;
    }
    // console.log(new Set([ ...s]));

    let ans = 0;
    for(let i = 0;i < s.length;i++) {
        let R = s.lastIndexOf(s[i]) - 1;    // position
        // let L = i + 1;
        let str = s.substr(i + 1, R - i);   // cut string by length
        if(str.length > ans) {
            ans = str.length;
        }
    }

    return ans;
}

console.log(solve("aa"));
// console.log(solve("abca"));
// console.log(solve("cbzxy"));
// console.log(solve("cabbac"));