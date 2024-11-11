//* Array-TS-Iteration-Level-1_1 (forEach)

const drinks = document.querySelector("#drinks") as HTMLElement;

let getraenke: string[] = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
];

getraenke.sort();

function myDrinks() {
    getraenke.forEach((item: string) => {
        console.log(item);
        if(drinks){
            drinks.innerHTML += `<p>${item}</p>`;
        }
    });
};
myDrinks();
