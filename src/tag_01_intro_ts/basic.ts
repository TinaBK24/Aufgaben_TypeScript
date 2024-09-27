//* Intro-TS-Level-1_11

console.log("Welcome :)");

//* Intro-TS-Level-1_12

let dogName = "Leon";
console.log(dogName);
dogName = "elf";

let age_number = 31;
console.log(age_number);
//age_number ="einunddreisig";
let age: string = "einunddreisig";
console.log(age);

let seventeen;
seventeen = 5;

const sum = seventeen + 44;
console.log(sum);

//* Intro-TS-Level-1_13

// Addition
let addition_operator: number = 1 + 1;
console.log('addition: ' + addition_operator);

// Subtraktion
let subtraktion_operator: number = 2 - 1;
console.log('subtraktion: ' + subtraktion_operator);

// Multiplikation
let multiplication_operator: number = 2 * 2;
console.log('multiplication: ' + multiplication_operator);

// Division
let division_operator: number = 4 / 2;
console.log('division: ' + division_operator);

// Modulo: zeigt an, was der Rest sein würde.
let modulo_operator: number = 14 % 5;
console.log('modulus: ' + modulo_operator);

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

a++;
console.log(a);

b--;
console.log(b);

const resultThree: number = a - b;
console.log(resultThree);

console.log(resultOne % resultTwo);

//* Intro-TS-Level-1_16