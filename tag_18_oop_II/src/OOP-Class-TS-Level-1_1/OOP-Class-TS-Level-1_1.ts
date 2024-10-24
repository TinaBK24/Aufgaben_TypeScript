//* OOP-Class-TS-Level-1_1

import IceCreamFlavor from "./classes/IceCreamFlavor";

const flavor1 = new IceCreamFlavor("Vanille", 1.5, true, "Klassische Wahl");
const flavor2 = new IceCreamFlavor("Schokolade", 1.7, true, "Reichhaltiger Geschmack");
const flavor3 = new IceCreamFlavor("Erdbeere", 1.6, false, "Fruchtig und frisch");
const flavor4 = new IceCreamFlavor("Pistazie", 2.0, true);

const iceCreamFlavorArr: IceCreamFlavor[] = [flavor1, flavor2, flavor3, flavor4];

iceCreamFlavorArr.forEach((popular) => {
    if(popular._isPopular){
        console.log(popular._name);
    }
});