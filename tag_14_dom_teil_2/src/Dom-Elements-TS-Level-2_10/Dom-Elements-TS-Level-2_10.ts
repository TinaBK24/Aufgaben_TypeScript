//* Dom-Elements-TS-Level-2_10

import './style.css'

const button = document.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;
const element = document.querySelector('#element') as HTMLElement;

button[0]?.addEventListener('click', () => {
    element.classList.value = '';
    element.classList.add('small');
});

button[1]?.addEventListener('click', () => {
    element.classList.value = '';
    element.classList.add('middle');
});

button[2]?.addEventListener('click', () => {
    element.classList.value = '';
    element.classList.add('big');
});