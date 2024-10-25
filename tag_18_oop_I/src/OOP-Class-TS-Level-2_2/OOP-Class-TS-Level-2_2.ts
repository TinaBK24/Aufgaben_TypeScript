//* OOP-Class-TS-Level-2_2

import Car from "./classes/Car";
import Driver from "./classes/Driver";

const car_1 = new Car("Audi", 2020, 240);
const car_2 = new Car("BMW", 2018, 230);
const car_3 = new Car("Porsche", 2021, 260);

const driver_1 = new Driver("Peter", "Pettigrew", 40, car_1);
const driver_2 = new Driver("Lucius", "Malfoy", 45, car_2);
const driver_3 = new Driver("Bellatrix", "Lestrange", 47, car_3);

console.log(driver_1);
console.log(driver_2);
console.log(driver_3);