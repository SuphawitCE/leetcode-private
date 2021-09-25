/*
1486. XOR Operation in an Array
Given an integer n and an integer start.

Define an array nums where nums[i] = start + 2*i (0-indexed) and n == nums.length.
Return the bitwise XOR of all elements of nums.

Input: n = 5, start = 0
Output: 8
Explanation: Array nums is equal to [0, 2, 4, 6, 8] where (0 ^ 2 ^ 4 ^ 6 ^ 8) = 8.
Where "^" corresponds to bitwise XOR operator.

Input: n = 4, start = 3
Output: 8
Explanation: Array nums is equal to [3, 5, 7, 9] where (3 ^ 5 ^ 7 ^ 9) = 8.

Input: n = 1, start = 7
Output: 7

Input: n = 10, start = 5
Output: 2
*/

const solve = (n, start) => {
    let nums = [];

    for(let i = start;i < n;i++) {
        nums[i] ^= nums[i];
    }
}

console.log(solve(5, 0));
// console.log(solve(4, 3));
// console.log(solve(1, 7));
// console.log(solve(10, 5));