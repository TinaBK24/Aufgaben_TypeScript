//* Dom-Elements-TS-Level-1_1

const inputText = document.getElementById('inputText') as HTMLInputElement;
const button = document.querySelector('button') as HTMLElement;
const myList = document.getElementById('myList') as HTMLElement;

button?.addEventListener('click', () => {
    const inputValue = inputText.value;

    if(inputValue !== ""){
        const newItem = document.createElement('li') as HTMLElement;
        newItem.textContent = inputValue;

        myList.appendChild(newItem);

        inputText.value = "";
    } else {
        alert("Bitte geben Sie etwas ein, bevor Sie es hinzufügen!");
    }
});

console.log(document.body.firstElementChild);
console.log(myList.children);