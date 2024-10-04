//* Array-TS-Level-1_8 (slice)

const lieblingsreiseziele: string [] = ["Schweden", "Polen", "Italien", "Norwegen", "Griechenland"];
console.log([...lieblingsreiseziele]);

const geschnitteneReiseziele = lieblingsreiseziele.slice(1, 3);
console.log(geschnitteneReiseziele);
