/*
A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.

Input: s = "is2 sentence4 This1 a3"
Output: "This is a sentence"
Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.

Input: s = "Myself2 Me1 I4 and3"
Output: "Me Myself and I"
Explanation: Sort the words in s to their original positions "Me1 Myself2 and3 I4", then remove the numbers.

*/

const solve = (s) => {
    s = s.split(' ');
    let ans = [];

    // for(let i = 0;i < s.length;i++) {
    //     ans[s[s.length - 1] - 1] = s[i].substring(0, s.length - 1);
    // }

    for(let w of s) {
        console.log(w.substring(0, w.length - 1));
        ans[w[w.length - 1] - 1] = w.substring(0, w.length - 1);
        // console.log(ans[w[w.length - 1] - 1]);
        // console.log('!!', w.substring(0, w.length - 1));
    }
    // console.log(ans.join(' '));
    return ans;
}

console.log(solve('computer3 engineering2 a1'));
// console.log(solve("is2 sentence4 This1 a3"));
// console.log(solve("Myself2 Me1 I4 and3"));
