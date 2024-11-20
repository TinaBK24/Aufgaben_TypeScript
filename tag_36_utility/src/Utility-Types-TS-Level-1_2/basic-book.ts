//* Utility-Types-TS-Level-1_2

import { IBook } from "./interfaces/IBook";

type TBasicBook = Omit<IBook, "publishingYear" | "shortDescription">;

const basicBook1: TBasicBook = {
    author: "J.K. Rowling",
    name: "Harry Potter und der Stein der Weisen",
    numberOfPages: 309,
};

console.log(basicBook1);


interface IBasicBook extends Omit<IBook, "publishingYear" | "shortDescription">{}

const basicBook2: IBasicBook = {
    author: "J.K. Rowling",
    name: "Harry Potter und die Kammer des Schreckens",
    numberOfPages: 341,
};

console.log(basicBook2);
