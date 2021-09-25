/*
Given an array nums. We define a running sum of an array as
runningSum[i] > = sum(nums[0]…nums[i]).
Return the running sum of nums.

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4]

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
*/

const solve = (num) => {
    const ans = [];
    let runSum = 0;
    for(let i = 0;i < num.length;i++) {
        runSum += num[i];
        ans.push(runSum);
    }

    return ans;
}

console.log(solve([1,2,3,4]));
console.log(solve([1,1,1,1,1]));
console.log(solve([3,1,2,10,1]));