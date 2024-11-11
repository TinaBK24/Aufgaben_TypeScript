//* OOP-Class-TS-Level-2_1

import SchoolClass from "./classes/SchoolClass";
import Person from "./classes/Person";

const person_1 = new Person(1, "Harry", "Potter", "31.07.1980");
const person_2 = new Person(1, "Hermione", "Grange", "19.09.1979");
const person_3 = new Person(1, "Ronald", "Weasley", "01.03.1980");

const programmingClass = new SchoolClass(1, "Programmierung", [person_1, person_2, person_3]);

console.log(programmingClass);