//* Loops-TS-Level-1_9

const wortInput = document.querySelector('#wortInput') as HTMLInputElement;
const wortBtn = document.querySelector('#wortBtn') as HTMLInputElement;
const filterInput = document.querySelector('#filterInput') as HTMLInputElement;
const filterBtn = document.querySelector('#filterBtn') as HTMLInputElement;
const result = document.querySelector('#result') as HTMLElement;

let words: string[] = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung'];

filterBtn?.addEventListener('click', () => {
    result.innerHTML = "";
    for (let i: number = 0; i < words.length; i++){
        if(Number(filterInput?.value) === words[i].length){
            result.innerHTML += `<p>${words[i]}</p>`;
        }
    }
});

wortBtn?.addEventListener('click', () => {
    words.push(wortInput?.value);
    wortInput.value = "";
});