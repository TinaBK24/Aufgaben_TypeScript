//* Conditionals-TS-Level-2_5

function check(){
const bundeslandInput = document.querySelector("#bundeslandInfo") as HTMLInputElement;
const bundeslandInfo = bundeslandInput.value.toLowerCase();
const ergebnis = document.querySelector("#bundeslandInfoErgebnis") as HTMLElement;

let info: string = " ";

    switch(bundeslandInfo){
        case "baden-württemberg":
            info = "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt";
            break;
        case "bayern":
            info = "Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt.";
            break;
        case "berlin":
            info = "Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt.";
            break;
        case "brandenburg":
            info = "Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt.";
            break;
        case "bremen":
            info = "Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt.";
            break;
        case "hamburg":
            info = "Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt.";
            break;
        case "hesse":
            info = "Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt.";
            break;
        case "mecklenburg-vorpommern":
            info = "Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt.";
            break;
        case "niedersachsen":
            info = "Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt.";
            break;
        case "nordrhein-westfalen":
            info = "Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt.";
            break;
        case "rheinland-pfalz":
            info = "Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt.";
            break;
        case "saarland":
            info = "Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt.";
            break;
        case "sachsen":
            info = "Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt.";
            break;
        case "sachsen-anhalt":
            info = "Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt.";
            break;
        case "schleswig-holstein":
            info = "Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt.";
            break;
        case "thüringen":
            info = "Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt.";
            break;
    }

    ergebnis.innerHTML = info;
}

document.addEventListener("DOMContentLoaded", () => {
    const checkBtn = document.querySelector("input[type='button']") as HTMLInputElement;
    if(checkBtn){
        checkBtn.addEventListener("click", check);
    }
})