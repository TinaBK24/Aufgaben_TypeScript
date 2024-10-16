//* Math-TS-Level-2_2

let zufallsZahl: number = Math.floor(Math.random() * 10) + 1;

// Fordere den Benutzer auf, eine Zahl einzugeben
let benutzerZahl: number = parseInt(prompt("Schätzen Sie die Nummer zwischen 1 und 10.") as string);

// Überprüfe, ob die Zahl richtig geraten wurde
if (benutzerZahl === zufallsZahl) {
    console.log("Glückwunsch! Sie haben die richtige Zahl erraten: " + zufallsZahl);
} else {
    console.log("Du hast verloren. Die Numer lautet " + zufallsZahl);
}