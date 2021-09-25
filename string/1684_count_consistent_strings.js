/*
You are given a string allowed consisting of distinct characters and an array of strings words. 
A string is consistent if all characters in the string appear in the string allowed.

Return the number of consistent strings in the array words.

Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
Output: 2
Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.

Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
Output: 7
Explanation: All strings are consistent.

Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
Output: 4
Explanation: Strings "cc", "acd", "ac", and "d" are consistent.

*/

const solve = (allowed, words) => {
    let a = allowed;
    let w = words;
    let ans = 0;
    // let temp = '';
    for(let i = 0;i < w.length;i++) {
        let b = true;
        for(let j = 0;j < w[i].length;j++) {
            // console.log(!a.includes(w[i][j]));
            if(!a.includes(w[i][j])) {
                b = false;
            }
        }

        if(b !== false) {
            ++ans;
        }
    }
    console.log(ans);
    // return ans;
}

/*
let a = 'abc';
console.log('xxx', !'x'.includes('aeee'));
*/

console.log(solve("ab", ["ad","bd","aaab","baa","badab"]));
console.log(solve("abc", ["a","b","c","ab","ac","bc","abc"]));
console.log(solve('cad', ["cc","acd","b","ba","bac","bad","ac","d"]));
