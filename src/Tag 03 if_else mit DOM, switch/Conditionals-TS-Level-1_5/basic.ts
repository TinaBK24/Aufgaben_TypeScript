//* Conditionals-TS-Level-1_5

let weekdayAsNumber: number;
let weekdayAsString: string | undefined;

const userInput = window.prompt("Please insert a number from 1 to 7");

weekdayAsNumber = Number(userInput);

switch (weekdayAsNumber) {
    case 1:
        weekdayAsString = "Montag";
        break;
    case 2:
        weekdayAsString = "Dienstag";
        break;
    case 3:
        weekdayAsString = "Mittwoch";
        break;
    case 4:
        weekdayAsString = "Donnerstag";
        break;
    case 5:
        weekdayAsString = "Freitag";
        break;
    case 6:
        weekdayAsString = "Samstag";
        break;
    case 7:
        weekdayAsString = "Sonntag";
        break;
}

console.log(weekdayAsString);
