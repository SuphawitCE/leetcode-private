/*
You are given a 0-indexed string s that has lowercase English letters in its even indices and digits in its odd indices.

There is a function shift(c, x), where c is a character and x is a digit, that returns the xth character after c.

For example, shift('a', 5) = 'f' and shift('x', 0) = 'x'.
For every odd index i, you want to replace the digit s[i] with shift(s[i-1], s[i]).

Return s after replacing all digits. It is guaranteed that shift(s[i-1], s[i]) will never exceed 'z'.

Input: s = "a1c1e1"
Output: "abcdef"
Explanation: The digits are replaced as follows:
- s[1] -> shift('a', 1) = 'b'
- s[3] -> shift('c', 1) = 'd'
- s[5] -> shift('e', 1) = 'f'

Input: s = "a1b2c3d4e"
Output: "abbdcfdhe"
Explanation: The digits are replaced as follows:
- s[1] -> shift('a', 1) = 'b'
- s[3] -> shift('b', 2) = 'd'
- s[5] -> shift('c', 3) = 'f'
- s[7] -> shift('d', 4) = 'h'

*/

const solve = (s) => {
    let str = s.split('');  // ['a', '1', 'c', '1', 'e', '1'];
    let ans = '';
    console.log(str[1].charCodeAt(0));

    for(let i = 0;i < str.length;i++) {
        if(i % 2 !== 0) {
            let c = str[i - 1].charCodeAt(0) +( + str[i]);
            ans += String.fromCharCode(c);
        } else {
            ans += str[i];
        }
    }

    return ans;
}

console.log('--------');

console.log(solve("a1c1e1"));
console.log(solve("a1b2c3d4e"));
