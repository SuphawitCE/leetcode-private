/*
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Input: s = "God Ding"
Output: "doG gniD"

*/

const solve = (s) => {
    let str = s.split(' ');

    let ans = '';
    for(let i = 0;i < str.length;i++) {
        ans += str[i].split('').reverse().join('') + ' ';
    }

    // console.log(ans);
    // Remove last element
    return ans.substring(0, ans.length - 1);
}

console.log(solve("Let's take LeetCode contest"));
// console.log(solve("God Ding"));
// console.log(solve("vector<string> split (string s, char delimiter)"));