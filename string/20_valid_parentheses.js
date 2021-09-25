/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

Input: s = "()"
Output: true

Input: s = "()[]{}"
Output: true

Input: s = "(]"
Output: false

Input: s = "([)]"
Output: false

Input: s = "{[]}"
Output: true

*/


const solve = (s) => {
    
    const pair = {
        '{':'}',
        '[':']',
        '(':')',
    };

    const stack = [];
    
    for(let i = 0;i < s.length;i++) {
        if(pair[s[i]]) {
            stack.push(s[i]);
        } else {
            if(s[i] !== pair[stack.pop()]) {
                return false;
            }
        }
    }
    return stack.length === 0;

    // for(let i = 0;i < s.length;i++) {
    //     if(s[i] === '(') {
    //         stack.push(')');
    //     } else if(s[i] === '{') {
    //         stack.push('}');
    //     } else if(s[i] === '[') {
    //         stack.push(']');
    //     } else {
    //         // check if s[i] not equal to top value of stack
    //         if(s[i] !== stack.pop()) {
    //             return false;
    //         }
    //     }
    // }
    
    // // Check if stack is empty
    // if(stack.length === 0) {
    //     return true;
    // } else {
    //     return false;
    // }
}

console.log(solve("()"));
console.log(solve("()[]{}"));
console.log(solve("(]"));
console.log(solve("([)]"));
console.log(solve("{[]}"));