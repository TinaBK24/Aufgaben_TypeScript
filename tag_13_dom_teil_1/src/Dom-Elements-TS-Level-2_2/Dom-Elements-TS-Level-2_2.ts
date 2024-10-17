//* Dom-Elements-TS-Level-2_2

import './style.css'

type SimplePerson = {
    vorname: string;
    nachname: string;
    land: string;
};

const vorname = document.getElementById('vorname') as HTMLInputElement;
const nachname = document.getElementById('nachname') as HTMLInputElement;
const land = document.getElementById('land') as HTMLSelectElement;
const submit = document.querySelector('input[type="submit"]') as HTMLInputElement;

submit?.addEventListener('click', (event) => {
    event.preventDefault();
    const vornameInput = vorname.value
    // console.log(vornameInput);
    
    const nachnameInput = nachname.value;
    // console.log(nachnameInput);
    
    const landInput = land.options[land.selectedIndex].text;
    // console.log(landInput);
    
    const person: SimplePerson = {
        vorname: vornameInput,
        nachname: nachnameInput,
        land: landInput
    };

    console.log(person);
    
});