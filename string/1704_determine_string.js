/*
You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). 
Notice that s contains uppercase and lowercase letters.

Return true if a and b are alike. Otherwise, return false.

Input: s = "book"
Output: true
Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.

Input: s = "textbook"
Output: false
Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
Notice that the vowel o is counted twice.

Input: s = "MerryChristmas"
Output: false

Input: s = "AbCdEfGh"
Output: true

*/

const solve = (s) => {
    const vowel = 'aeiouAEIOU';
    let mid = s.length / 2;

    let first = 0;
    let second = 0;

    for(let i = 0;i < mid;i++)  if(vowel.includes(s[i])) {
        // return boolean
        ++first;    //  true, count
    }
    for(let i = mid;i < s.length;i++)   if(vowel.includes(s[i])) {
        ++second;
    }

    return first === second;    // true, false
}

// console.log(solve("book"));
// console.log(solve("textbook"));
console.log(solve("MerryChristmas"));
console.log(solve("AbCdEfGh"));
console.log(solve("tkPAdxpMfJiltOerItiv"));     // false
console.log(solve("ZyIAYucL")); // false