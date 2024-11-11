//* OOP-Class-TS-Level-1_4

import Alien from "./classes/Alien";

const alien1 = new Alien("Zog", "green");
alien1._planet = "Green Planet";
alien1._galaxy = "Milky Way";

const alien2 = new Alien("Xen", "blue");
alien2._planet = "Blue Planet";
alien2._galaxy = "Andromeda";

const alien3 = new Alien("Blip", "red");
alien3._planet = "Red Planet";
alien3._galaxy = "Triangulum";

console.log(alien1);
console.log(alien2);
console.log(alien3);
