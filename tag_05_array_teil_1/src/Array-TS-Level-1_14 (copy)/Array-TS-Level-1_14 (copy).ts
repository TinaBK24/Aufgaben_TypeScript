//* Array-TS-Level-1_14 (copy)

const oldHollywoodActors: string[] = ["Marlon Brando", "Audrey Hepburn", "Elizabeth Taylor", "Cary Grant", "Paul Newman", "Doris Day"];

let actorsReference: string[] = oldHollywoodActors;

actorsReference.push("Marilyn Monroe");

console.log(oldHollywoodActors);
console.log(actorsReference);

const actorsCopyConcat: string[] = oldHollywoodActors.concat();
const actorsCopySlice: string[] = oldHollywoodActors.slice();
const actorsCopySpread: string[] = [...oldHollywoodActors];

actorsCopyConcat[0] = "Humphrey Bogart";
console.log(actorsCopyConcat);

actorsCopySlice[1] = "Grace Kelly";
console.log(actorsCopySlice);

actorsCopySpread[2] = "James Dean";
console.log(actorsCopySpread);
