/*
Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

Input: s = "abccccdd"
Output: 7
Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.

Input: s = "a"
Output: 1

Input: s = "bb"
Output: 2


*/

const solve = (s) => {
    let ans = 0;
    let map = { };
    // console.log(!map[s[1]]);
    for(let i = 0;i < s.length;i++) {
        if(!map[s[i]]) {
            map[s[i]] = 0;
        }
        map[s[i]]++;
        
        console.log(map);
        if(map[s[i]] % 2 === 0) {
            ans += 2;
        }
    }
    // console.log('!', map);
    console.log('ans: ', ans);
    if(s.length > ans) {
        console.log('T');
        return ans + 1;
    } else {
        console.log('F');
        return ans;
    }
}

console.log(solve("abccccdd")); // 8 > 6, return 6 + 1
// console.log(solve('a'));
// console.log(solve('bb'));