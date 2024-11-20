//* Utility-Types-TS-Level-1_5

import { IBook } from "./interfaces/IBook";

type TReadOnlyBook = Readonly<IBook>;

const readonlyBook1: TReadOnlyBook = {
    author: "J.K. Rowling",
    name: "Harry Potter und die Heiligtümer des Todes",
    publishingYear: "2007",
    shortDescription: "Harrys letzte Mission, um die Horcruxe zu zerstören und Voldemort zu besiegen.",
    numberOfPages: 759,
};

console.log(readonlyBook1);


interface IReadOnlyBook extends Readonly<IBook> {}

const readonlyBook2: IReadOnlyBook = {
    author: "J.K. Rowling",
    name: "Harry Potter und das verwunschene Kind",
    publishingYear: "2016",
    shortDescription: "Die Geschichte von Harrys Kind und der Fortsetzung der magischen Saga.",
    numberOfPages: 330,
};

console.log(readonlyBook2);
