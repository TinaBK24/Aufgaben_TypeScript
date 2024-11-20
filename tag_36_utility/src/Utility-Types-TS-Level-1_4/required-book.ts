//* Utility-Types-TS-Level-1_4

import { IBook } from "./interfaces/IBook";

type TRequiredBook = Required<IBook>;

const requiredBook1: TRequiredBook = {
    author: "J.K. Rowling",
    name: "Harry Potter und der Orden des Phönix",
    publishingYear: "2003",
    shortDescription: "Harrys fünftes Schuljahr bringt neue Herausforderungen und eine geheime Armee.",
    numberOfPages: 766,
};

console.log(requiredBook1);


interface IRequiredBook extends Required<IBook> {}

const requiredBook2: IRequiredBook = {
    author: "J.K. Rowling",
    name: "Harry Potter und der Halbblutprinz",
    publishingYear: "2005",
    shortDescription: "Dumbledore enthüllt Voldemorts Vergangenheit, während Hogwarts in Gefahr schwebt.",
    numberOfPages: 607,
};

console.log(requiredBook2);
