/*
This is Regular Expression practice


*/

const solve = (s) => {
    // const re = new RegExp(variable, 'flag')
    let k = 'dog';
    const re = new RegExp(k|cat|bird, 'g');

    console.log(re.test(s));

    return -1;
}

console.log(solve('asdawdasddogpoipoiwer;k'));