//* Dom-Elements-TS-Level-2_7

const button = document.querySelector('button') as HTMLButtonElement;
const umwickeln = document.querySelector('.umwickeln') as HTMLElement;

let counter = 0;
let num = 0;

button?.addEventListener('click', () => {
    console.log("click");
    
    const neuElement = document.createElement('div');
    neuElement.textContent = num.toString();

    
    if(counter % 10 === 0){
        neuElement.classList.add('weiss');
    } else {
        neuElement.classList.add('rechteck');
    }

    umwickeln.appendChild(neuElement);

    counter++;
    num++;
});