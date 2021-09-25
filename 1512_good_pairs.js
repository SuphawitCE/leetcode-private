/*
Given an array of integers nums.

A pair (i,j) is called good if nums[i] == nums[j] and i < j.

Return the number of good pairs.

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good

Input: nums = [1,2,3]
Output: 0

*/

const solve = (nums) => {
    // let ans = 0;
    // for(let i = 0;i < nums.length;i++)  for(let j = i + 1;j < nums.length;j++) {
    //     if(nums[i] === nums[j] && i < j) {
    //         ++ans;
    //     }
    // }
    // return ans;

    let ans = 0;
    let i = 0;
    let pair = { value : 0};
    for(pair.value of nums) {
        i++;
        pair.value = i;
        ans += pair.value;
    }
    return ans;

}

console.log(solve([1,2,3,1,1,3]));
console.log(solve([1,1,1,1]));
console.log(solve([1,2,3]));
