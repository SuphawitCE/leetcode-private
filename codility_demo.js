const solve = (n) => {
  let p = n.length;
  let a = Math.max(...n);
  let b = Math.min(...n);

  if (a <= 0 && b <= 0) {
    return 1;
  }

  const arr = [];
  n.sort();
  n = [...new Set(n)];

  let count = 1;
  for (let i = 0; i < n.length; i++) {
    arr.push(count);
    ++count;
  }
  for (let i = 0; i < Math.max(n.length, arr.length); i++) {
    if (arr[i] !== n[i]) {
      return arr[i];
    }
  }

  if (!(n === arr)) return p + 1;

  return -1;
};

console.log(solve([1, 3, 6, 4, 1, 2])); // 5
console.log(solve([2, 1, 6, 1, 3, 4])); // 5
console.log(solve([1, 2, 3])); // 4
console.log(solve([-1, -3])); // 1
