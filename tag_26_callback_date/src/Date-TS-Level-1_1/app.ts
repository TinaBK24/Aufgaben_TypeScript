//* Date-TS-Level-1_1

const output = document.getElementById('output') as HTMLParagraphElement;

const date1 = new Date("September 2, 2019 09:00:00");
const date2 = new Date(0);
const date3 = new Date(31556908800);
const date4 = new Date(86400000);

console.log(date1);
console.log(date2);
console.log(date3);
console.log(date4);

output.innerHTML = `
    <p>${date1}</p>
    <p>${date2}</p>
    <p>${date3}</p>
    <p>${date4}</p>
`;