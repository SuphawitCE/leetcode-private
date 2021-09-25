/*
Given an array of string words. Return all strings in words which is substring of another word in any order. 

String words[i] is substring of words[j], if can be obtained removing some characters to left and/or right side of words[j].

Input: words = ["mass","as","hero","superhero"]
Output: ["as","hero"]
Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
["hero","as"] is also a valid answer.

Input: words = ["leetcode","et","code"]
Output: ["et","code"]
Explanation: "et", "code" are substring of "leetcode".

Input: words = ["blue","green","bu"]
Output: []
*/

const solve = (words) => {
    const ans = [];
  
    for(let i = 0;i < words.length;i++) {
        for(let j = 0;j < words.length;j++) {
            if(words[i] === words[j]) continue;
            console.log(words[j].search(words[i]) !== -1);
            if(words[j].search(words[i]) !== -1) {
                ans.push(words[i]);
                break;
            }
        }
    }
    
    return ans;
}

console.log(solve(["mass","as","hero","superhero"]));
// console.log(solve(["leetcode","et","code"]));
// console.log(solve(["blue","green","bu"]));
