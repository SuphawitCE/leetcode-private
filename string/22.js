/*

// 3
["((()))","(()())","(())()","()(())","()()()"]
*/


const backtrack = (openN, closedN, n) => {
    const res = [];
    const stack = [];

    if(openN === closedN === n) {
        res.push(''.join(stack));
        return;
    }

    if(openN < n) {
        stack.push('(');
        backtrack(openN + 1, closedN);
        stack.pop();
    }

    if(closedN < openN) {
        stack.push(')');
        backtrack(openN, closedN + 1);
        stack.pop();
    }

    return res;
}

const solve = (n) => {
    const stack = [];
    const res = [];

    let openN = 0, closedN = 0;

    if()
    
    return backtrack(0,0,n);

    // return res;
}

console.log(solve(3));
// console.log(solve(["()"]));