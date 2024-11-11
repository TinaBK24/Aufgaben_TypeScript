//* Array-TS-Iteration-Level-1_2 (map)

const drinks = ['Coca-Cola', 'Apfelsaft', 'Pepsi', 'Traubensaft', 'Sprite', 'Orangensaft', 'Red Bull Energy Drink', 'Fanta'];

const upperDrinks: string[] = drinks.map((drink: string) => {
    console.log(drink);
    return drink.toUpperCase();
});
console.log(upperDrinks);

const likeDrinks: string[] = drinks.map((drink: string) => {
    return "I like " + drink;
})
console.log(likeDrinks);



function toUpperCaseDrink(drink: string): string {
    return drink.toUpperCase();
}

const upperDrink: string[] = drinks.map(toUpperCaseDrink);

console.log(upperDrink);