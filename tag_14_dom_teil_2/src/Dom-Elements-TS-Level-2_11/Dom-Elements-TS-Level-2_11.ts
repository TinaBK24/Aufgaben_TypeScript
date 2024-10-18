//* Dom-Elements-TS-Level-2_11

import './style.css'

const button = document.querySelector('button') as HTMLButtonElement;

button?.addEventListener('click', () => {
    let red: number = Math.floor(Math.random() * 255);
    let green: number = Math.floor(Math.random() * 255);
    let blau: number = Math.floor(Math.random() * 255);

    document.body.style.color = '';
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blau})`
});