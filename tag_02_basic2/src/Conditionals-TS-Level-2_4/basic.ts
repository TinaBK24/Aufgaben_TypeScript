//* Conditionals-TS-Level-2_4

const x: number = Math.floor(Math.random() * 77) +1;
const y: number = Math.floor(Math.random() * 77) +1;

console.log(x);
console.log(y);

if(x === y){
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

function randomNumber(){
    const randomNumber1: number = Math.ceil(Math.random() * 77);
    const randomNumber2: number = Math.ceil(Math.random() * 77);

    console.log(randomNumber1);
    console.log(randomNumber2);

    if(randomNumber1 === randomNumber2){
        console.log("Was für ein Zufall");
    } else if(randomNumber1 > randomNumber2){
        console.log("Erste Zahl größer");
    } else if(randomNumber1 < randomNumber2){
        console.log("Zweite Zahl größer");
    }

    switch (true) {
        case randomNumber1 === randomNumber2:
            console.log("Was für ein Zufall");
            break;
        case randomNumber1 > randomNumber2:
            console.log("Erste Zahl größer");
            break;
        case randomNumber1 < randomNumber2:
            console.log("Zweite Zahl größer");
            break;
    }
}

randomNumber();