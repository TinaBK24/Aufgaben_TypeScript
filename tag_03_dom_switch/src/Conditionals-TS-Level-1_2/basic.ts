//* Conditionals-TS-Level-1_2

const inputNumber = document.querySelector("#inputNumber") as HTMLInputElement;
const inputBtn = document.querySelector("#inputBtn") as HTMLInputElement;
const result = document.querySelector("#result") as HTMLElement;

function weather(){
    const outputNumber = Number(inputNumber.value);
    
    if(outputNumber <= 2){
        result.textContent = "Die Wetter Qualität ist: schlecht";
    } else if (outputNumber <= 5){
        result.textContent = "Die Wetter Qualität ist: okay";
    } else if (outputNumber <= 7){
        result.textContent = "Die Wetter Qualität ist: gut";
    } else if(outputNumber <= 10){
        result.textContent = "Die Wetter Qualität ist: super";
    } else {
        result.textContent = "Gib mir die Zahl von 0 bis 10";
    }
}

inputBtn.addEventListener("click", weather);