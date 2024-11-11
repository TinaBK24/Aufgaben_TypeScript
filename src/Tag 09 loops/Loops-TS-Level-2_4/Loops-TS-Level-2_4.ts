//* Loops-TS-Level-2_4

function addToFifty():void {
    let total: number = 0;
    
    while (total <= 50){
        const randomNum: number = Math.ceil(Math.random() * 10);

        total += randomNum;

        console.log(randomNum);
    }
    console.log(`${total} > 50. Stopping right here.`);
}

addToFifty();