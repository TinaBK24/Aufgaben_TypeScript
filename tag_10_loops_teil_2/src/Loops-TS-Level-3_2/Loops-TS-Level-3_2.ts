//* Loops-TS-Level-3_2

let numbers: number[] = [5, 22, 15, 100, 55];

const outputBlock = document.querySelector('#outputBlock') as HTMLElement;

numbers.forEach(num => {
    let division: string[] = [];

    for (let i: number = 2; i < num; i++){
        if (num % i === 0){
            const result: number = num / i;
            const output: string = `${num} is devidable by ${i}. The result is: ${result}`;
            division.push(output);
            console.log(output);
        }
    }
    outputBlock.innerHTML += `<p>${division.join('<br>')}</p>`
});
