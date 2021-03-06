/*
Given a string s formed by digits ('0' - '9') and '#' . We want to map s to English lowercase characters as follows:

Characters ('a' to 'i') are represented by ('1' to '9') respectively.
Characters ('j' to 'z') are represented by ('10#' to '26#') respectively. 
Return the string formed after mapping.

It's guaranteed that a unique mapping will always exist.

Input: s = "10#11#12"
Output: "jkab"
Explanation: "j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".

Input: s = "1326#"
Output: "acz"

Input: s = "25#"
Output: "y"

Input: s = "12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"
Output: "abcdefghijklmnopqrstuvwxyz"

*/

const solve = (s) => {
    const map = {"1":"a","2":"b","3":"c","4":"d","5":"e","6":"f","7":"g","8":"h","9":"i","10":"j","11":"k","12":"l","13":"m","14":"n","15":"o","16":"p","17":"q","18":"r","19":"s","20":"t","21":"u","22":"v","23":"w","24":"x","25":"y","26":"z"};
    // console.log(map[1]);
    const st = [];
    let ans = '';

    for(let i = 0;i < s.length;i++) {
        if(s[i] !== '#') {
            st.push(s[i]);
        } else {
            let digit = st.pop();
            st.push(map[st.pop() + digit]);
            // console.log('!!', map[st.pop() + digit]);
        }
    }
    console.log(map);
    // console.log(st);
    for(let i = 0;i < st.length;i++) {

        if(st[i] <= '9') {
            ans += map[st[i]];
        } else {
            ans += st[i];
        }
        // ans += c <= '9' ? map[c] : c;
    }
    

    return ans;
}

console.log(solve("10#11#12"));
// console.log(solve("1326#"));
// console.log(solve("25#"));
// console.log(solve("12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"));