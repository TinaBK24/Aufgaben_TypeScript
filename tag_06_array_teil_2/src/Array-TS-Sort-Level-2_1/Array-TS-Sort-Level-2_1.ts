//* Array-TS-Sort-Level-2_1

function reverseString(str: string): string {
    return str.split("").reverse().join("");
}
// split("") --> розбиває рядок на масив символів
// reverse() --> перевертає масив
// join("") --> об'єднує масив назад в рядок
console.log(reverseString("Sergio"));
console.log(reverseString("Hannah"));
console.log(reverseString("Regallager"));
console.log(reverseString("Reliefpfeiler"));
console.log(reverseString("Rentner"));
console.log(reverseString("Ella mag alle Bohnen"));
console.log(reverseString("han nesaH has ennaH"));
