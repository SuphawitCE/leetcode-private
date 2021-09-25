/*
Given two arrays of integers nums and index. Your task is to create target array under the following rules:

Initially target array is empty.
From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
Repeat the previous step until there are no elements to read in nums and index.
Return the target array.

It is guaranteed that the insertion operations will be valid.

Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
Output: [0,4,1,3,2]
Explanation:
nums       index     target
0            0        [0]
1            1        [0,1]
2            2        [0,1,2]
3            2        [0,1,3,2]
4            1        [0,4,1,3,2]

Input: nums = [1,2,3,4,0], index = [0,1,2,3,0]
Output: [0,1,2,3,4]
Explanation:
nums       index     target
1            0        [1]
2            1        [1,2]
3            2        [1,2,3]
4            3        [1,2,3,4]
0            0        [0,1,2,3,4]

Input: nums = [1], index = [0]
Output: [1]
*/

// arr.splice(left, right, insertValue)

const solve = (nums, index) => {
    let target = [];
    // for(let i = 0;i < nums.length;i++) {
    //     let L = index[i];
    //     let R = nums[i];
    //     target.splice(L, 0, R);
    // }

    for(let i = 0;i < nums.length;i++) {
        if(index[i] === i) {
            target.push(nums[i]);
            console.log(nums[i]);
        } else {
            let temp = target[index[i]];
            target[index[i]] = nums[i];
            target.push(0);
            for(let j = target.length - 1;j > index[i] + 1;j--) {
                target[j] = target[j - 1];
            }
            target[index[i] + 1] = temp;
            // console.log(target);
        }
    }

    return -1;
}

console.log(solve([0,1,2,3,4], [0,1,2,2,1]));
// console.log(solve([1,2,3,4,0], [0,1,2,3,0]));
// console.log(solve([1], [0]));
