//* Array-TS-Iteration-Level-1_4 (map)

let fahrenheit: number[] = [0, 32, 45, 50, 75, 80, 99, 120];

const celsius: number[] = fahrenheit.map((grad: number) => {
    return Math.round((grad - 32) / 1.8);
});
console.log(celsius);
