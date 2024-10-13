//* Loops-TS_Level-1_7

const output = document.querySelector('#output') as HTMLElement;

let num: number = 1;
do {
    output.innerHTML += `<p>The number is ${num}</p>`;
    num++;
}
while(num <= 5);