/*
Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
Return the array in the form [x1,y1,x2,y2,...,xn,yn].

Input: nums = [2,5,1,3,4,7], n = 3
Output: [2,3,5,4,1,7] 
Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

Input: nums = [1,2,3,4,4,3,2,1], n = 4
Output: [1,4,2,3,3,2,4,1]

Input: nums = [1,1,2,2], n = 2
Output: [1,2,1,2]

*/

const solve = (nums, n) => {
    console.log('-----------');
    let left = 0;
    let right = n;
    const ans = [];
    let i = 0;
    while(left < n && right < nums.length) {
        ans[i++] = nums[left++];
        console.log('x', i);
        console.log('L', left);
        ans[i++] = nums[right++];
        console.log('R', right);
        console.log('y', i);
    }

    // return ans;
}

console.log(solve([2, 5, 1, 3, 4, 7], 3));
console.log(solve([1,2,3,4,4,3,2,1], 3));
console.log(solve([1,1,2,2], 2));
