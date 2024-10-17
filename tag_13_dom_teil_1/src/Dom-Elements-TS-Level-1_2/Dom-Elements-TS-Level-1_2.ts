//* Dom-Elements-TS-Level-1_2

import './style.css'

const exampleColor = document.getElementsByClassName('example') as HTMLCollectionOf<HTMLElement>;
const button = document.querySelector('button') as HTMLElement;

let originalColor = true;
function changeColor(){

    for (let i = 0; i < exampleColor.length; i++){
        const element = exampleColor[i];

        if(originalColor){
            element.style.backgroundColor = "black";
            element.style.color = "white";

        } else {
            element.style.backgroundColor = "";
            element.style.color = "";
        }
    }

    originalColor = !originalColor;
}

button?.addEventListener('click', changeColor);