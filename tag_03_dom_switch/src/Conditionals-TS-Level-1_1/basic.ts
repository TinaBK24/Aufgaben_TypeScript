//* Conditionals-TS-Level-1_1

const inputAge = document.querySelector("#inputAge") as HTMLInputElement;
const inputBtn = document.querySelector("#inputBtn") as HTMLInputElement;
const result = document.querySelector("#result") as HTMLElement;

function adult(){
    const outputAge = Number(inputAge.value);

    if(outputAge < 18){
        result.textContent = "Minderjährig";
    } else {
        result.textContent = "Volljährig";
    }
}

inputBtn.addEventListener("click", adult);