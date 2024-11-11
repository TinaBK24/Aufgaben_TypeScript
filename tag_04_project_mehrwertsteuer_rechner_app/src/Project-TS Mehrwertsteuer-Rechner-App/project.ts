const btn = document.querySelector("#btn") as HTMLInputElement;

const ergebnis = () => {
    console.log("Hey");

    const nt_bt = document.querySelector("#nt_bt") as HTMLInputElement;
    const bt_nt = document.querySelector("#bt_nt") as HTMLInputElement;
    const prozent = document.querySelector("input[name='prozent']:checked") as HTMLInputElement;
    const userInput = document.querySelector("#userInput") as HTMLInputElement;
    const resultMwsBetrag = document.querySelector("#resultMwsBetrag") as HTMLElement;
    const resultBtBetrag = document.querySelector("#resultBtBetrag") as HTMLElement;
    
    const convertProzent = Number(prozent.value);
    const convertUserInput = Number(userInput.value.replace(",", "."));
    console.log(convertProzent, convertUserInput);

    if(nt_bt.checked){
        console.log("Netto zu Brutto");

        const mwsBetrag = convertUserInput * convertProzent / 100;
        console.log(resultMwsBetrag);
        resultMwsBetrag.textContent = mwsBetrag.toFixed(2);

        const bruttoBetrag = convertUserInput + mwsBetrag;
        console.log(resultBtBetrag);
        resultBtBetrag.textContent = bruttoBetrag.toFixed(2);

    } else if (bt_nt.checked){
        console.log("Brutto zu Netto");

        const mwsBetrag = (convertUserInput * convertProzent) / (100 + convertProzent);
        console.log(mwsBetrag);
        resultMwsBetrag.textContent = mwsBetrag.toFixed(2);

        const bruttoBetrag = convertUserInput / (1 + convertProzent / 100);
        console.log(bruttoBetrag);
        resultBtBetrag.textContent = bruttoBetrag.toFixed(2);
    }
}

if(btn){
    btn.addEventListener("click", ergebnis);
}