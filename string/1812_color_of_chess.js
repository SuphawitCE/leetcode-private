/*
You are given coordinates, a string that represents the coordinates of a square of the chessboard. 
Below is a chessboard for your reference.

Return true if the square is white, and false if the square is black.

The coordinate will always represent a valid chessboard square. The coordinate will always have the letter first, and the number second.

Input: coordinates = "a1"
Output: false
Explanation: From the chessboard above, the square with coordinates "a1" is black, so return false.

Input: coordinates = "h3"
Output: true
Explanation: From the chessboard above, the square with coordinates "h3" is white, so return true.

Input: coordinates = "c7"
Output: false

*/

const solve = (crds) => {

    // alternative
    // let ans = false;
    // let alp = 'abcdefgh';
    // let a = alp.indexOf(crds[0]);
    // let n = Number(crds[1]);
    // if(a % 2 === 0) {
    //     if(n % 2 === 0) {
    //         ans = true;
    //     } else {
    //         ans = false;
    //     }
    // } else {
    //     if(n % 2 === 0) {
    //         ans = false;
    //     } else {
    //         ans = true;
    //     }
    // }

    // optimal
    return (alp.indexOf(crds[0]) + Number(crds[1])) % 2 === 0;
}

console.log(solve('a1'));
console.log(solve("h3"));
console.log(solve("c7"));