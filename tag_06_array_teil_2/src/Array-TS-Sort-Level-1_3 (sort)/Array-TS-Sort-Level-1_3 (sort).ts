//* Array-TS-Sort-Level-1_3 (sort)

let numArray1: number[] = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];

const ASCnumArray1: number[] = numArray1.sort((a, b) => a - b);
console.log(ASCnumArray1);

//? ODER
// function ASCnum(a: number, b: number){
//     return a - b;
// }
// console.log(numArray1.sort(ASCnum));
