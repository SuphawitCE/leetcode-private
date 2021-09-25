const solve = (n) => {

    return n.indexOf(Math.max( ...n));


}

console.log(solve([1, 3, 6, 4, 1, 2])); // 5
// console.log(solve([2, 1, 6, 1, 3, 4] ));   // 5
// console.log(solve([1, 2, 3] )); // 4
// console.log(solve([-1, -3]));   // 1