/*
Given an integer number n, return the difference between the product of its digits and the sum of its digits.

Input: n = 234
Output: 15 
Explanation: 
Product of digits = 2 * 3 * 4 = 24 
Sum of digits = 2 + 3 + 4 = 9 
Result = 24 - 9 = 15

Input: n = 4421
Output: 21
Explanation: 
Product of digits = 4 * 4 * 2 * 1 = 32 
Sum of digits = 4 + 4 + 2 + 1 = 11 
Result = 32 - 11 = 21

*/

const solve = (n) => {
    let str = String(n);
    let product = 1;
    let sum = 0;
    for(let i = 0;i < str.length;i++) {
        product *= Number(str[i]);
        sum += Number(str[i]);
    }
    const ans = product - sum;
    return ans;
}

console.log(solve(234));
console.log(solve(4421));