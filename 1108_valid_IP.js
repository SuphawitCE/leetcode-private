/*
Given a valid (IPv4) IP address, return a defanged version of that IP address.
A defanged IP address replaces every period "." with "[.]".
Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"

Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"
*/

const solve = (str) => {
    let ans = '';

    for(let i = 0;i < str.length;i++) {
        // ans += str[i];
        if(str[i] === '.') {
            ans += '[.]';
            // ans += '.';
            // ans += ']';
        } else {
            ans += str[i];
        }
    }

    return ans;
}

console.log(solve("1.1.1.1"));
console.log(solve('255.100.50.0'));

