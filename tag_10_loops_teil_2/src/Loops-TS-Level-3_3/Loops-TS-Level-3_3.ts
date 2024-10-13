//* Loops-TS-Level-3_3

const numberInput = document.querySelector('#numberInput') as HTMLInputElement;
const inputBtn = document.querySelector('#inputBtn') as HTMLInputElement;
const output = document.querySelector('#output') as HTMLElement;

inputBtn?.addEventListener('click', () => {
    const vieleO: string[] = [];
    const inputValue: number = Number(numberInput.value);

    for (let i: number = 0; i < inputValue; i++){
        if (inputValue % 2 === 0){
            vieleO.push('o');
        } else {
            if (i % 2 === 1){
                vieleO.push('O');
            } else {
                vieleO.push('o');
            }
        }
    }
    const result: string = `<p>L${vieleO.join("")}p</p>`;
    output.innerHTML = result;
    
    return vieleO;
});