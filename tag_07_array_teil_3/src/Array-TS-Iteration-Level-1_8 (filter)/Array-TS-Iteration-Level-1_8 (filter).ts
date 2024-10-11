//* Array-TS-Iteration-Level-1_8 (filter)

const zahlen: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function printEvenNumbers(): number[]{
    return zahlen.filter((num: number) => num % 2 === 0);
}
console.log(printEvenNumbers());

function printOddNumbers(): number[]{
    return zahlen.filter((num: number) => num % 2 === 1);
}
console.log(printOddNumbers());


const printEvenNumbers1: number[] = zahlen.filter((num: number) => {
    return num % 2 === 0;
});
console.log(printEvenNumbers1);

const printOddNumbers1: number[] = zahlen.filter((num: number) => {
    return num % 2 === 1;
});
console.log(printOddNumbers1);
