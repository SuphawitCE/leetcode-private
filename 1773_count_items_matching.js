/*
You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, 
and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

The ith item is said to match the rule if one of the following is true:

ruleKey == "type" and ruleValue == typei.
ruleKey == "color" and ruleValue == colori.
ruleKey == "name" and ruleValue == namei.
Return the number of items that match the given rule.

Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
Output: 1
Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].

Input: items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"
Output: 2
Explanation: There are only two items matching the given rule, which are ["phone","blue","pixel"] and ["phone","gold","iphone"]. Note that the item ["computer","silver","phone"] does not match.

*/

const solve = (items, ruleKey, ruleValue) => {
  let rk = ruleKey;
  let rv = ruleValue;
  let ans = 0;

  for (let i = 0; i < items.length; i++) {
    if (rk === "type" && items[i][0] === rv) ++ans;
    else if (rk === "color" && items[i][1] === rv) ++ans;
    else if (rk === "name" && items[i][2] === rv) ++ans;
  }

  return ans;
};

console.log(
  solve(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "lenovo"],
      ["phone", "gold", "iphone"],
    ],
    "color",
    "silver"
  )
);

console.log(
  solve([
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "phone"],
      ["phone", "gold", "iphone"],
    ],
    "type",
    "phone",
  ])
);