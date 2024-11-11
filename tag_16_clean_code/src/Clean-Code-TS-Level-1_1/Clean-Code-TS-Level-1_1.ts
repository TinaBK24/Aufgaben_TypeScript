//* Clean-Code-TS-Level-1_1

const inputText = document.getElementById('input-text') as HTMLInputElement;
const capitalLettersBtn = document.getElementById('capital-letters') as HTMLInputElement;
const spacesBtn = document.getElementById('spaces') as HTMLInputElement;
const vowelsBtn = document.getElementById('vowels') as HTMLInputElement;
const output = document.getElementById('output') as HTMLElement;

function toUpperCaseLetter(text: string): number {
    const charText = text
        .split('')
        .filter((char: string) => char === char.toUpperCase() && char !== char.toLowerCase())
        .length;
    console.log(charText);
    return charText;
}

capitalLettersBtn?.addEventListener('click', () => {
    const inputTextValue: string = inputText.value;
    output.innerHTML = `Anzahl Großbuchstaben: ${String(toUpperCaseLetter(inputTextValue))}`;
});

function spaces(text: string): number {
    const charText = text
        .split('')
        .filter((char: string) => char === ' ')
        .length;
    return charText
}

spacesBtn?.addEventListener('click', () => {
    const inputTextValue: string = inputText.value;
    output.innerHTML = `Anzahl Leerzeichen: ${String(spaces(inputTextValue))}`;
})

function vowelsLetter(text: string): number {
    const vowels: string[] = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    const charText = text
        .split('')
        .filter((char: string) => vowels.includes(char))
        .length;
    return charText;
}

vowelsBtn?.addEventListener('click', () => {
    const inputTextValue: string = inputText.value;
    output.innerHTML = `Anzahl Vokale: ${String(vowelsLetter(inputTextValue))}`;
});