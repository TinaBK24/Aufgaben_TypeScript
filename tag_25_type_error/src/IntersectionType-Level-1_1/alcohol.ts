//* IntersectionType-Level-1_1

type TAlcohol = {
    name: string;
    percentage: number;
    type: string[];
}
type TMixer = {
    name: string;
    type: string[];
    carbonated: boolean;
}

type TCocktail = TAlcohol & TMixer;

const cocktail: TCocktail = {
    name: "Aperol Spritz",
    percentage: 15,
    type: ["Aperitif", "Spritz"],
    carbonated: true
}

console.log(cocktail);
