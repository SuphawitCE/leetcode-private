/*
Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

Input: "Hello"
Output: "hello"

Input: "here"
Output: "here"

Input: "LOVELY"
Output: "lovely"

*/

const solve = (str) => {
    let ans = [];   // str.split('');
    for(let u of str)   ans.push(u);

    for(let i = 0;i < ans.length;i++) {
        let ch = ans[i].charCodeAt(0);
        if(ch <= 90 && ch >= 65) {
            // 65 = A
            // 90 = Z

            // 32 = space
            ans[i] = String.fromCharCode(ch + 32);
        }
    }

    return ans.join('');

}

console.log(solve("Hello"));
console.log(solve("here"));
console.log(solve("LOVELY"));
