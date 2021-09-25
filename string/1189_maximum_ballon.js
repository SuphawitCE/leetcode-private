/*
Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of instances that can be formed.

Input: text = "nlaebolko"
Output: 1

Input: text = "loonbalxballpoon"
Output: 2

Input: text = "leetcode"
Output: 0
*/

const solve = (text) => {
    const map = {
        b: 0,
        a: 0,
        l: 0,
        o: 0,
        n: 0,
    };

    for(let i = 0;i < text.length;i++) {
        map[text[i]]++;
    }

    return Math.floor(
        Math.min(map.a, map.b, map.l / 2, map.o / 2, map.n)
    );
}

console.log(solve("nlaebolko"));
console.log(solve("loonbalxballpoon"));
console.log(solve("leetcode"));
