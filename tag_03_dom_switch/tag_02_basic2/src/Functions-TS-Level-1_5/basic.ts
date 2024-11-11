//* Functions-TS-Level-1_5

function  multiplyAndDivide(x: number, y: number){
    if(y === 0){
        console.log(`Multiplication von ${x} und ${y}: ${x * y}`);
        console.log("Division durch 0 nicht erlaubt");
    } else {
        console.log(`Multiplication von ${x} und ${y}: ${x * y}`);
        console.log(`Division von ${x} und ${y}: ${x / y}`);
    }
}

multiplyAndDivide(10, 2);
multiplyAndDivide(30, 20);
multiplyAndDivide(100, 100);
multiplyAndDivide(5, 0);
multiplyAndDivide(45, 173);
multiplyAndDivide(1, 1000);