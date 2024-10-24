//* OOP-Class-TS-Level-1_2

import SchoolClass from "./classes/SchoolClass";

const class_1 = new SchoolClass(1, "Mathematik");
const class_2 = new SchoolClass(2, "Informatik");
const class_3 = new SchoolClass(3, "Physik");

class_1._name = "Algebra";
class_2._name = "Programmierung";

console.log(class_1);
console.log(class_2);
console.log(class_3);