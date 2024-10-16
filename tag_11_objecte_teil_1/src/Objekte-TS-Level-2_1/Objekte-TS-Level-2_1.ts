//* Objekte-TS-Level-2_1

type EdelmetallPreis = {
    name: string;
    preiseGramEuro: number;
    veraenderung: string;
};

let edelMetallPreise: EdelmetallPreis[] = [
    { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
    { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
    { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
    { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
    { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
    { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
    { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
    { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
    { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" }
];


const output = document.querySelector('#output') as HTMLElement;


let namesArr: string[] = [];
edelMetallPreise.forEach((item) => {
    namesArr.push(item.name);
});
console.log("Names (map):", namesArr);

let namesMap = edelMetallPreise.map((item) => item.name);
console.log("Names (forEach):", namesMap);


let preiseArr: number[] = [];
edelMetallPreise.forEach((item) => {
    preiseArr.push(item.preiseGramEuro);
});
console.log("Preise (map):", preiseArr);

let preiseMap = edelMetallPreise.map((item) => item.preiseGramEuro);
console.log("Preise (forEach):", preiseMap);


let changesArr: string[] = [];
edelMetallPreise.forEach((item) => {
    changesArr.push(item.veraenderung);
});
console.log("Changes (forEach):", changesArr);

let changesMap = edelMetallPreise.map((item) => item.veraenderung);
console.log("Changes (map):", changesMap);


let expensiveMetals = edelMetallPreise.filter((item) => item.preiseGramEuro > 50);
console.log(expensiveMetals);

output.innerHTML = `
    <table>
        <tr>
            <th>Name</th>
            <th>PreisGrammEuro</th>
            <th>Veranderung</th>
        </tr>
        ${edelMetallPreise.map(item => `
            <tr>
                <td>${item.name}</td>
                <td>${item.preiseGramEuro}</td>
                <td>${item.veraenderung}</td>
            </tr>`).join('')}
    </table>
`;