//* Conditionals-TS-Level-3_1

const salesMonth: number = Math.ceil(Math.random() * 12);
console.log(salesMonth);

switch(salesMonth){
    case 1:
    case 2:
    case 3:
        console.log("1. Quartal");
        break;
    case 4:
    case 5:
    case 6:
        console.log("2. Quartal");
        break;
    case 7:
    case 8:
    case 9:
        console.log("3. Quartal");
        break;
    case 10:
    case 11:
    case 12:
        console.log("4. Quartal");
        break;
}

const totalSales: number = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
console.log(totalSales);

switch(true){
    case totalSales <= 2500:
        console.log("Im 1. Quartal war der Umsatz schlecht!");
        break;
    case totalSales <= 5000:
        console.log("Im 2. Quartal war der Umsatz mittelmäßig!");
        break;
    case totalSales <= 7500:
        console.log("Im 3. Quartal war der Umsatz hoch!");
        break;
    case totalSales <= 10000:
        console.log("Im 4. Quartal war der Umsatz unglaublich!");
        break;
}