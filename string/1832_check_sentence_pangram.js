/*
A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, 

return true if sentence is a pangram, or false otherwise

Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.

Input: sentence = "leetcode"
Output: false

*/

const solve = (sen) => {
    // let st = new Set();
    // for(let i = 0;i < sen.length;i++) {
    //     st.add(sen[i]);
    // }
    // if(st.size === 26)    return true;
    // else return false;

    // let ans = [...Array(26)].reduce((alp) => 
    //     alp + String.fromCharCode(i++), '', i=97
    // );
    let alp = '';
    let start = 'a'.charCodeAt(0);
    let last = 'z'.charCodeAt(0);
    // Generate a - z
    for(let i = start;i <= last;i++) {
        alp += String.fromCharCode(i);
    }
    let regex = /\s/g;
    // let lower = sen.toLowerCase().replace(regex, '');

    for(let i = 0;i < alp.length;i++) {
        console.log(sen.indexOf(alp[i]));
        if(sen.indexOf(alp[i]) === -1) {
            return false;
        }
    }
    return true;

    // let alp = {};
    // for(let i = 0;i < sen.length;i++) {
    //     console.log(se.fromCharCode(i));
    //     alp[sen.charCodeAt(i) - 96] = 1;
    // }

    // for(let i = 1;i <= 26;i++) {
    //     if(!alp[i]) return false;
    // }
    // return true;



}

console.log(solve("thequickbrownfoxjumpsoverthelazydog"));
console.log(solve("leetcode"));
