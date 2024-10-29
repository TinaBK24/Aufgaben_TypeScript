//* OOP-Class-TS-Level-1_10

import Beverage from "./classes/Beverage";
import Coffee, {CoffeeType} from "./classes/Coffee";
import Tea, {TeaFlavor} from "./classes/Tea";

const beverage1 = new Beverage("Orange Juice", 3.50);

const coffee1 = new Coffee("Morning Espresso", 2.00, CoffeeType.Espresso);
const coffee2 = new Coffee("Evening Latte", 3.00, CoffeeType.Latte);

const tea1 = new Tea("Relaxing Green Tea", 2.50, TeaFlavor.Green);
const tea2 = new Tea("Energizing Black Tea", 2.75, TeaFlavor.Black);
const tea3 = new Tea("Chai Spice", 3.00, TeaFlavor.Chai);

console.log(beverage1, coffee1, coffee2, tea1, tea2, tea3);