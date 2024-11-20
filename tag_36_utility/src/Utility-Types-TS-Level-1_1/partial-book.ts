//* Utility-Types-TS-Level-1_1

import { IBook } from "./interfaces/IBook";

type TPartialBook = Partial<IBook>

const partialBook1: TPartialBook = {
    author: "J.K. Rowling",
    name: "Harry Potter",
};

console.log(partialBook1);


interface IPartialBook extends Partial<IBook>{}

const partialBook2: IPartialBook = {
    name: "The Hobbit",
};

console.log(partialBook2);
