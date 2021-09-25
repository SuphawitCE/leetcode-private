const solve = (s) => {
    // const ans = [];
    // while(s.length !== 0)   ans.push(s.pop());
    // return ans;

    // Two pointer method
    let L = 0, R = s.length - 1;

    while(L < R) {
        let tmp = s[L];
        s[L++] = s[R];
        s[R--] = tmp;
    }

    return s;

}

console.log(solve(["h","e","l","l","o"]));
console.log(solve(["H","a","n","n","a","h"]));
console.log(solve(['b', 'a', 'n', 'k']));