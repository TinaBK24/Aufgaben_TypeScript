import { TAlcohol } from "./alcohol";
import { TMixer } from "./alcohol";
import { TCocktail } from "./alcohol";

console.log("%c BONUS ", "background-color: gold;");


function mixCocktail(alcohol: TAlcohol, mixer: TMixer): TCocktail{
    return{
        name: `${alcohol.name} ${mixer.name}`,
        percentage: alcohol.percentage,
        type: [...alcohol.type, ...mixer.type],
        carbonated: mixer.carbonated
    }
}

const vodka: TAlcohol = {
    name: "Wodka",
    percentage: 40,
    type: ["Spirituose"]
}

const rum: TAlcohol = {
    name: "Rum",
    percentage: 37.5,
    type: ["Spirituose"]
}

const lemon: TMixer = {
    name: "Lemon",
    type: ["Fruchtsaft"],
    carbonated: false
}

const soda: TMixer = {
    name: "Soda",
    type: ["Wasser"],
    carbonated: true
}

const coctails: TCocktail[] = [];
coctails.push(mixCocktail(vodka, lemon));
coctails.push(mixCocktail(vodka, soda));
coctails.push(mixCocktail(rum, lemon));
coctails.push(mixCocktail(rum, soda));

coctails.forEach(coctail => {
    console.log(coctail);
})