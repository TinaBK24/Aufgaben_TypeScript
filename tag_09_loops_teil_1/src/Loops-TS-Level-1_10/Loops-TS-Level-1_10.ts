//* Loops-TS-Level-1_10

const numbers: number[] = [4, 9, 2, 94, 23, 5];

function getHighestNumber(numArr: number[]): number{
    if (numArr.length === 0){
        return 0;
    }
    return Math.max(...numbers);
}

console.log(getHighestNumber(numbers));
