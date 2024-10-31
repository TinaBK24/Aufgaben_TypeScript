//* OOP-Interface-TS-Level-2_1

import Manager from "./classes/Manager";
import Subordinate from './classes/Subordinate';

const manager = new Manager("Khrystyna", 31, "Team Lead");

const subordinate1 = new Subordinate("Sofi", 25, "Developer");
const subordinate2 = new Subordinate("Harry", 30, "Tester");
const subordinate3 = new Subordinate("Mari", 27, "Designer");

manager.addSubordinate(subordinate1);
manager.addSubordinate(subordinate2);
manager.addSubordinate(subordinate3);