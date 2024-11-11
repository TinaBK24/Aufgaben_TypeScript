//* Loops-TS-Level-3_6

const results = [44, 11, 70, 80, 52, 88, 94, 3, 25, 46];

function calculate(results: number[]): string {
    let sum = 0;

    for (let i = 0; i < results.length; i++) {
        sum += results[i];
    }

    const average = sum / results.length;

    let grade: string;
    if (average < 50) {
        grade = "Ungenügend";
    } else if (average >= 50 && average < 60) {
        grade = "Mangelhaft";
    } else if (average >= 60 && average < 70) {
        grade = "Ausreichend";
    } else if (average >= 70 && average < 80) {
        grade = "Befriedigend";
    } else if (average >= 80 && average < 90) {
        grade = "Gut";
    } else {
        grade = "Sehr gut";
    }

    return `Durchschnitt: ${average.toFixed(2)}, Bewertung: ${grade}`;
}

console.log(calculate(results));