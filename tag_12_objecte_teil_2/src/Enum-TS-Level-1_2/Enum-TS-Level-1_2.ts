//* Enum-TS-Level-1_2

enum PizzaSize {
    Small,
    Medium,
    Large,
    Familie
}
enum PizzaIngredients {
    Cheese,
    Onion,
    Salami,
    Mushrooms,
    Olives,
    Bacon,
    Tomato,
    Peppers,
}
type Pizza = {
    size: PizzaSize;
    ingredients: PizzaIngredients[];
}

let pizza1: Pizza = {
    size: PizzaSize.Small,
    ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Onion, PizzaIngredients.Tomato]
};

let pizza2: Pizza = {
    size: PizzaSize.Medium,
    ingredients: [PizzaIngredients.Salami, PizzaIngredients.Olives, PizzaIngredients.Mushrooms]
};

let pizza3: Pizza = {
    size: PizzaSize.Large,
    ingredients: [PizzaIngredients.Bacon, PizzaIngredients.Peppers, PizzaIngredients.Olives]
};

let pizza4: Pizza = {
    size: PizzaSize.Familie,
    ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Tomato, PizzaIngredients.Salami, PizzaIngredients.Onion]
};

console.log("Pizza 1:", pizza1);
console.log("Pizza 2:", pizza2);
console.log("Pizza 3:", pizza3);
console.log("Pizza 4:", pizza4);