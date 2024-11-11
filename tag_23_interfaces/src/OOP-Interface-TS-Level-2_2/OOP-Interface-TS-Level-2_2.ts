//* OOP-Interface-TS-Level-2_2

import Manager from "./classes/Manager";
import Trainee from "./classes/Trainee";

const manager = new Manager("Khrystyna", 31, "Team Lead", new Date(2015, 8, 1));

const trainee1 = new Trainee("Germi", 22, new Date());
const trainee2 = new Trainee("Ron", 24, new Date());

manager.addSubordinate(trainee1);
manager.addSubordinate(trainee2);

console.log(manager.getYearsOfService());
