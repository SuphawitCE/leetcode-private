/*
Given two string arrays word1 and word2, return true 
if the two arrays represent the same string, and false otherwise.

A string is represented by an array 
if the array elements concatenated in order forms the string.

Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true
Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true.

Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
Output: false

Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
Output: true
*/

const solve = (w1, w2) => {
    let tempW1 = '';
    let tempW2 = '';
    for(let i = 0;i < w1.length;i++) {
        tempW1 += w1[i];
    }
    for(let i = 0;i < w2.length;i++) {
        tempW2 += w2[i];
    }
    if(tempW1 === tempW2) {
        return true;
    } else {
        return false;
    }
    // console.log(tempW1);

}

console.log(solve(["ab", "c"], ["a", "bc"]));
console.log(solve(["a", "cb"], ["ab", "c"]));
console.log(solve(["abc", "d", "defg"], ["abcddefg"]));