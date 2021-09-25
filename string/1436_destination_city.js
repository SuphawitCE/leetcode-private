/*
You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. 
Return the destination city, that is, the city without any path outgoing to another city.

It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
Output: "Sao Paulo" 
Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination city. Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".

Input: paths = [["B","C"],["D","B"],["C","A"]]
Output: "A"
Explanation: All possible trips are: 
"D" -> "B" -> "C" -> "A". 
"B" -> "C" -> "A". 
"C" -> "A". 
"A". 
Clearly the destination city is "A".

Input: paths = [["A","Z"]]
Output: "Z"

*/

// Graph Problem
const solve = (paths) => {

    // const graph = new Set();
    // for(const [from, to] of paths) {
    //     graph.add(from);
    // }
    // console.log(graph);

    // for(const [from, to] of paths) {
    //     if(!graph.has(to)) {
    //         return to;
    //     }
    // }
    // return;

    const graph = new Map();
    for(const [from, to] of paths) {
        graph.set(from, to);
    }
    for(const [from, to] of paths) {
        if(!graph.get(to)) {
            return to;
        }
    }

    // const set = new Set();
    // let ans = '';
    
    // for(let i = 0;i < paths.length;i++) {
    //     set.add(paths[i][0])
    // }
    
    // console.log(set.has(paths));
    // for(let i = 0;i < paths.length;i++) {
    //     if(!set.has(paths[i][1])) {
    //         ans = paths[i][1];
    //     }
    // }

    // return ans;
}

console.log(solve([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]));
// console.log(solve([["B","C"],["D","B"],["C","A"]]));
// console.log(solve([["A","Z"]]));

