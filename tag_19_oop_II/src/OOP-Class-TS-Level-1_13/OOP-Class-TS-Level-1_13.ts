//* OOP-Class-TS-Level-1_13

import Car from "./classes/Car";
import Driver from "./classes/Driver";
import { CarType } from "./classes/CarType";

const car_1 = new Car("Audi", 2020, 100, CarType.Convertible);
const car_2 = new Car("BMW", 2018, 150, CarType.Coupe);
const car_3 = new Car("Porsche", 2021, 260, CarType.Hatchback);

console.log(car_1.getSpeedInfo());
console.log(car_2.getSpeedInfo());
console.log(car_3.getSpeedInfo());


const driver_1 = new Driver("Peter", "Pettigrew", 40, car_1, 2020);
const driver_2 = new Driver("Lucius", "Malfoy", 45, car_2, 2021);
const driver_3 = new Driver("Bellatrix", "Lestrange", 47, car_3, 2022);

console.log(driver_1.getCarType());
console.log(driver_2.licenseFromYear);
console.log(driver_3);