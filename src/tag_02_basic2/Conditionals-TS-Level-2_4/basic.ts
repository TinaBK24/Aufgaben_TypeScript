//* Conditionals-TS-Level-2_4

const x: number = Math.floor(Math.random() * 77) +1;
const y: number = Math.floor(Math.random() * 77) +1;

console.log(x);
console.log(y);

if(x == y){
    console.log("Was für ein Zufall");
} else if(x > y){
    console.log("Erste Zahl größer");
} else if(y > x){
    console.log("Zweite Zahl größer");
}

switch (true) {
    case x === y:
        console.log("Was für ein Zufall");
        break;
    case x > y:
        console.log("Erste Zahl größer");
        break;
    case y > x:
        console.log("Zweite Zahl größer");
        break;
}