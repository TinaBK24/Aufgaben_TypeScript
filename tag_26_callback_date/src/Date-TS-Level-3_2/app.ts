//* Date-TS-Level-3_2

import { differenceInHours, differenceInSeconds, differenceInYears, format } from "date-fns";

const firstDateVariable = new Date(0)
console.log(firstDateVariable);

const heuteVariable = new Date()
console.log(heuteVariable);

const year = differenceInYears(heuteVariable, firstDateVariable);
console.log("Unterschied in Jahren:", year);

const hours = differenceInHours(heuteVariable, firstDateVariable);
console.log("Unterschied in Stunden:", hours);

const seconds = differenceInSeconds(heuteVariable, firstDateVariable);
console.log("Unterschied in Sekunden:", seconds);

const myBirthday = new Date(1992, 10, 23, 12, 40);
console.log(myBirthday);

const aktuellesAlter = differenceInYears(heuteVariable, myBirthday)
console.log("Mein aktuelles Alter:", aktuellesAlter);
console.log("Mein Alter am 07.04.2007:", differenceInYears(new Date(2007, 4, 7), myBirthday));

const format1 = format(myBirthday, "dd.MM.yyyy HH:mm:ss");
const format2 = format(myBirthday, "dd.MM.yyyy HH:mm");
const format3 = format(myBirthday, "dd.MM.yyyy");
const format4 = format(myBirthday, "dd. MMMM yyyy");
const format5 = format(myBirthday, "HH:mm");
const format6 = format(myBirthday, "EEEE");
const format7 = format(myBirthday, "MMMM");
const format8 = format(myBirthday, "dd 'des' MMMM 'im Jahre der Dame' yyyy");

console.log(format1);
console.log(format2);
console.log(format3);
console.log(format4);
console.log(format5);
console.log(format6);
console.log(format7);
console.log(format8);
