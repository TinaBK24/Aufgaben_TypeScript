//* Dom-Elements-TS-Level-1_9

import './style.css'

const farbeAuswahlen = document.getElementById('farbeAuswahlen') as HTMLSelectElement;
const button = document.getElementById('button') as HTMLElement;

button?.addEventListener('click', (event) => {
    event.preventDefault();

    const selectedIndex = farbeAuswahlen.selectedIndex;

    if(selectedIndex){
        const selectedColor = farbeAuswahlen.options[selectedIndex].value;

        if(selectedColor){
            button.style.backgroundColor = selectedColor;

            farbeAuswahlen.options[selectedIndex].remove();
        }
    } else {
        alert('Bitte wählen Sie eine Farbe aus der Liste.');
    }
});