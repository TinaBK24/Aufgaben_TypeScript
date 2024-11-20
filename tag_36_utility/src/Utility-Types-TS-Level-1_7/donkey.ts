//* Utility-Types-TS-Level-1_7

interface IDonkey {
    name: string;
    age: number;
    fluffyness: number;
    favoriteFood: string;
}

enum Donkey {
    Daisy,
    Gus,
    Rosie,
    Coco,
    Jasper
}

const donkeyRecord: Record<Donkey, IDonkey> = {
    [Donkey.Daisy]: {
        name: "Daisy",
        age: 7,
        fluffyness: 8,
        favoriteFood: "Karotten",
    },
    [Donkey.Gus]: {
        name: "Gus",
        age: 3,
        fluffyness: 2,
        favoriteFood: "Äpfel",
    },
    [Donkey.Rosie]: {
        name: "Rosie",
        age: 12,
        fluffyness: 10,
        favoriteFood: "Heu",
    },
    [Donkey.Coco]: {
        name: "Coco",
        age: 20,
        fluffyness: 5,
        favoriteFood: "Zuckerwürfel",
    },
    [Donkey.Jasper]: {
        name: "Jasper",
        age: 15,
        fluffyness: 7,
        favoriteFood: "Klee",
    },
};

console.log(donkeyRecord);