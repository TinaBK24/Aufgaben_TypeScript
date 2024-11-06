//* Date-TS-Level-2_1

const outputDate = document.getElementById('outputDate') as HTMLDivElement;
const outputTime = document.getElementById('outputTime') as HTMLDivElement;

const heuteVariable = new Date();
console.log(heuteVariable);

function displayDateTime(){
    const day = String(heuteVariable.getDate()).padStart(2, "0");
    const month = String(heuteVariable.getMonth() + 1).padStart(2, "0");
    const year = heuteVariable.getFullYear();
    console.log(day, month, year);
    
    outputDate.innerHTML = `
        <p>${day}-${month}-${year}</p>
        <p>${day}/${month}/${year}</p>
    `

    const localTime = heuteVariable.toLocaleTimeString();
    const utcTime = heuteVariable.toLocaleTimeString('de-DE');
    console.log(localTime, utcTime);
    
    outputTime.innerHTML = `
        <p>${localTime}</p>
        <p>${utcTime}</p>
    `
}
displayDateTime()

