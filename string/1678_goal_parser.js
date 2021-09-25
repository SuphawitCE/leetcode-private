/*
You own a Goal Parser that can interpret a string command. 
The command consists of an alphabet of "G", "()" and/or "(al)" in some order. 
The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". 
The interpreted strings are then concatenated in the original order.

Given the string command, return the Goal Parser's interpretation of command.

Input: command = "G()(al)"
Output: "Goal"
Explanation: The Goal Parser interprets the command as follows:
G -> G
() -> o
(al) -> al
The final concatenated result is "Goal".

Input: command = "G()()()()(al)"
Output: "Gooooal"

Input: command = "(al)G(al)()()G"
Output: "alGalooG"
*/

const solve = (cmd) => {
    let ans = '';

    for(let i = 0;i < cmd.length;i++) {
        if(cmd[i] === 'G') {
            ans += 'G';
        } else if(cmd[i] === '(' && cmd[i + 1] === ')') {
            ans += 'o';
        } else if(cmd[i] === '(' && cmd[i + 1] === 'a') {
            ans += 'al';
        }
    }
    // console.log(ans);
    return ans;
}

console.log(solve("G()(al)"));
console.log(solve("G()()()()(al)"));
console.log(solve("(al)G(al)()()G"));