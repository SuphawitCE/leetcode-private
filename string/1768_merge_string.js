/*
You are given two strings word1 and word2. 
Merge the strings by adding letters in alternating order, 
starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d

*/

const solve = (word1, word2) => {

    // Two Pointer
    let ans = '';
    let L = 0, R = 0;
    while(L < word1.length && R < word2.length) {
        ans += word1[L++];
        ans += word2[R++];
    }
    
    while(R < word2.length) {
        ans += word2[R++];
    }
    while(L < word1.length) {
        ans += word1[L++];
    }
    return ans;

    // let ans = [];
    // if(word1.length > word2.length) {
        
    //     for(let i = 0;i < word1.length;i++) {
    //         ans.push(word1[i]);
    //         ans.push(word2[i]);
    //     }
    // } else {
    //         for(let i = 0;i < word2.length;i++) {
    //             ans.push(word1[i]);
    //         ans.push(word2[i]);
    //     }
    // }
    // return ans.join('');
}

console.log(solve("abc", "pqr"));
console.log(solve("ab", "pqrs"));
console.log(solve("abcd", "pq"));