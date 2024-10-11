//* Array-TS-Iteration-Level-1_7 (map)

let fruits: string[] = ['🍇', '🍌', '🍒', '🍎'];

const juices: string[] = fruits.map((fruit: string) => {
    return fruit + '🍹';
});
console.log(juices);
