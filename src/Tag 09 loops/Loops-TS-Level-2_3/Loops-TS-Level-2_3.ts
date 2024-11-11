//* Loops-TS-Level-2_3

const getNumberOfVowels = (inputString: string): number => {
    const vowels: string[] = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
    let count: number = 0;

    for (let char of inputString){
        if (vowels.includes(char)){
            count++;
        }
    }
    return count;
}

console.log(getNumberOfVowels("Hello, World!"));
console.log(getNumberOfVowels("TypeScript"));