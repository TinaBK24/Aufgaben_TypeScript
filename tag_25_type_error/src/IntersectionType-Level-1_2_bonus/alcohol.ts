//* IntersectionType-Level-1_1_BONUS

export type TAlcohol = {
    name: string;
    percentage: number;
    type: string[];
}
export type TMixer = {
    name: string;
    type: string[];
    carbonated: boolean;
}

export type TCocktail = TAlcohol & TMixer;

const cocktail: TCocktail = {
    name: "Aperol Spritz",
    percentage: 15,
    type: ["Aperitif", "Spritz"],
    carbonated: true
}

console.log(cocktail);


