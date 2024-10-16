//* Math-TS-Level-1_2

let randomNumbers: number[] = [3.14, 193.4464, 0.8596433607, -2.940629089];

function zahlRound(zahl: number){
    const gerundeteZahl= Math.round(zahl);
    console.log(gerundeteZahl);
}

randomNumbers.forEach(zahlRound);