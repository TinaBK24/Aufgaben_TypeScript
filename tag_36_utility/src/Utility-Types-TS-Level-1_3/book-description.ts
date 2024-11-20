//* Utility-Types-TS-Level-1_3

import { IBook } from "./interfaces/IBook";

type TBookDescription = Pick<IBook, "name" | "shortDescription">;

const bookDescription1: TBookDescription = {
    name: "Harry Potter und der Gefangene von Askaban",
    shortDescription: "Harrys drittes Schuljahr an Hogwarts birgt Geheimnisse und Gefahren.",
};

console.log(bookDescription1);


interface IBookDescription extends Pick<IBook, "name" | "shortDescription"> {}

const bookDescription2: IBookDescription = {
    name: "Harry Potter und der Feuerkelch",
    shortDescription: "Harry wird unerwartet zum Teilnehmer des Trimagischen Turniers.",
};

console.log(bookDescription2);
