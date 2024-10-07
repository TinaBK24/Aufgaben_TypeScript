//* Array-TS-Sort-Level-2_2 (sort)

let numArray: number[] = [36, 324, 122, 62, 98, 88, 99, 1000];

const ASCnumArray: number[] = numArray.sort((a, b) => a - b);
console.log(ASCnumArray);

//? ODER
// function ACSnum(a: number, b: number){
//     return a - b;
// }
// console.log(numArray.sort(ACSnum));
