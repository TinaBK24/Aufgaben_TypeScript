//* OOP-Class-TS-Level-1_3

import Animal from "./classes/Animal";
import Person, {Gender} from "./classes/Person";

const animal = new Animal("Katze", 18, "Markisa");
console.log(animal);

const person = new Person("Alice", new Date(), Gender.Female);
console.log(person);
