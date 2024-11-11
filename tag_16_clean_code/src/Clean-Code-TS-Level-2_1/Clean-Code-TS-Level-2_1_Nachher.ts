//* Clean-Code-TS-Level-2_1_Nachher

console.log("%c Nachher ", "background-color: gold;");
const numberText1: string[] = ['One', 'Two', 'Three', 'Four', 'Five'];
const userInput1: number = Math.ceil(Math.random() * 7);

function getNumberText1(num: number | undefined){
    if(num && num >= 1 && num <= 5){
        console.log(userInput1);
        console.log(numberText1[num - 1]);
    } else {
        console.log(userInput1);
        console.log('Unknown');
    }
}
getNumberText1(userInput1);