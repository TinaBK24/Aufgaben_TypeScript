//* Loops-TS-Level-2_2

const numberInput = document.querySelector('#numberInput') as HTMLInputElement;
const numberBtn = document.querySelector('#numberBtn') as HTMLInputElement;
const result = document.querySelector('#result') as HTMLElement;

numberBtn?.addEventListener('click', () => {
    const vieleO: string[] = [];
    const inputValue: number = Number(numberInput.value);

    for (let i: number = 0; i < inputValue; i++){
        vieleO.push('o');
    }
    // console.log(vieleO);

    const output: string = `L${vieleO.join('')}p`;
    result.innerHTML = output;
    
    return vieleO;
});