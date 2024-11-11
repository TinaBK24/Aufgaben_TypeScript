//* Loops-TS-Level-1_11

function calculateSum(maxNumber: number){
    let sum: number = 0;
    for (let num: number = 1; num <= maxNumber; num++){
        sum += num;
    }
    return sum;
}
console.log(calculateSum(9));
