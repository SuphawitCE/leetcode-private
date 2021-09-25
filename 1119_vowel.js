/*
Given a string, remove the vowels from the string and print the string without vowels.
Input : welcome to geeksforgeeks
Output : wlcm t gksfrgks

Input : what is your name ?
Output : wht s yr nm ?

https://stackoverflow.com/questions/13829289/javascript-strip-vowels
*/

const solve = (str) => {
    str = str.toLowerCase();
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    let ans = '';

    // for(let i = 0;i < str.length;i++) {

    //     if(str[i] === vowel[0] || str[i] === vowel[1] || str[i] === vowel[2] || str[i] === vowel[3] || str[i] === vowel[4]) continue;
    //     ans += str[i];
    // }
    
    return str.replace(/[aeiou]/gi, '');
}

console.log(solve('welcome to geeksforgeeks'));
console.log(solve('what is your name'));