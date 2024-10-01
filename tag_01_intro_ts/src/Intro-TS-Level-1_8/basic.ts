//* Intro-TS-Level-1_8

let x: number = 20;
let y: number = 30;

console.log(x + y);
console.log(x - y);
console.log(y - x);
console.log(x * y);
console.log(x / y);

let z: number = 10;
const resultOne: number = (x * y) / z;
console.log(resultOne);

let a: number = 15;
let b: number = 9;
console.log(a % b);

let c: number = 20;
const resultTwo: number = (a + b) * c;
console.log(resultTwo);

//a++; oder
a += 1
console.log(a);

//b--; oder
b -= 1
console.log(b);

const resultThree: number = a - b;
console.log(resultThree);

console.log(resultOne % resultTwo);
