//* Array-TS-Level-1_4 (push)

let stadt: string[] = ["London", "Paris", "New York"];
console.log([...stadt]); // виводить оригінал, без push

stadt.push("Shanghai", "Istanbul");
console.log(stadt);