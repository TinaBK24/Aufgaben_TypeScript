//* Bom-TS-Level-1_1

function starteWarten(): void {
    console.log("Start: Warten für 3 Sekunden..");
    
    starteCountdown();

    setTimeout(() => {
        console.log("Erledigt. Du hast 3 Sekunden verschwendet.");
    }, 3000);
}

function starteCountdown(): void {
    let zaehler: number = 10;

    const intervall = setInterval(() => {
        console.log(zaehler);
        zaehler--;

        if (zaehler === 0) {
            clearInterval(intervall);
            console.log("Endlich Feierabend!");
        }
    }, 1000);
}

starteWarten();