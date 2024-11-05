//* ErrorHandling-TS-Level-2_1

function generateLottoNumber(): number{
    const zahl = Math.ceil(Math.random() * 100);

    if(zahl > 49){
        throw new Error("Zahl ist größer als 49")
    }

    return zahl;
}

const lottoResults: number[] = [];

while(lottoResults.length < 7){
    try{
        const number: number = generateLottoNumber();

        if(!lottoResults.includes(number)){
            lottoResults.push(number);
        }
    } catch{}
}

console.log("Die Lottozahlen sind:", lottoResults);