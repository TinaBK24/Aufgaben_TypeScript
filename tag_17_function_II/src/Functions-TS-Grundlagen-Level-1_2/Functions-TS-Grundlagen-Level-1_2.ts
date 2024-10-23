//* Functions-TS-Grundlagen-Level-1_2

console.log("%c Function", "background-color: gold;");

function sayHallo(){
    const headline = document.createElement('h2') as HTMLElement;
    headline.innerHTML += "Hallo";
    document.body.appendChild(headline);
}
sayHallo();

function addition(a: number, b: number){
    const paragraph = document.createElement('p') as HTMLParagraphElement;
    const c = a + b;
    console.log(c);
    paragraph.innerHTML += c;
    document.body.appendChild(paragraph);
}
addition(2, 3);

function multiplication(a: number, b: number){
    const c = a * b;
    window.alert(`Das Ergebnis der Multiplikation von ${a} und ${b} ist: ${c}`);
}
multiplication(2, 3);

const objektKeys = {
    firstName: "Harry",
    lastName: "Potter",
    age: 30,
    showInfo: function(){
        console.log(`Hallo ${this.firstName} ${this.lastName}, du bist ${this.age} Jahre alt.`);
    }
}
objektKeys.showInfo();


console.log("%c Arrow-Function", "background-color: gold;");

const sayHalloArr = () => {
    const headline = document.createElement('h2') as HTMLElement;
    headline.innerHTML += "Hallo";
    document.body.appendChild(headline);
}
sayHalloArr();

const additionArr = (a: number, b: number) => {
    const paragraph = document.createElement('p') as HTMLParagraphElement;
    const c = a + b;
    console.log(c);
    paragraph.innerHTML += c;
    document.body.appendChild(paragraph);
}
additionArr(20, 30);

const multiplicationArr = (a: number, b: number) => {
    const c = a * b;
    window.alert(`Das Ergebnis der Multiplikation von ${a} und ${b} ist: ${c}`)
}
multiplicationArr(20, 30);

const objektKeysArr = {
    firstName: "Harry",
    lastName: "Potter",
    age: 30,
    showInfo: () => {
        console.log("Hallo Harry Potter, du bist 30 Jahre alt.");
    }
}
objektKeysArr.showInfo();