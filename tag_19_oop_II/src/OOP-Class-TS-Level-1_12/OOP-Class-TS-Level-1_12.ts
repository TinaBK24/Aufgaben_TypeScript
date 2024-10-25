//* OOP-Class-TS-Level-1_12

import IceCreamFlavor from "./classes/IceCreamFlavor";

const flavor1 = new IceCreamFlavor("Vanille", 1.5, true, 3,  "Klassische Wahl");
const flavor2 = new IceCreamFlavor("Schokolade", 1.7, true, 2, "Reichhaltiger Geschmack");
const flavor3 = new IceCreamFlavor("Erdbeere", 1.6, false, 1);

flavor1.getTotalPrice();

flavor2.printInfo();

console.log(flavor3.getLengthOfDescription());
