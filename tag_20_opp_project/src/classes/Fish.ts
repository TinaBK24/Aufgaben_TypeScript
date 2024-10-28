import Animal from "./Animal";
import { EnclosureId } from "./Enclosure";

class Fish extends Animal{
    constructor(emoji: string, name: string, yearOfBirth: number, continents: string[], specialNeeds?: string){
        super(emoji, name, yearOfBirth, continents, EnclosureId.JungleHabitat,specialNeeds);
    }
}

export class Pufferfish extends Fish{
    constructor(name: string, yearOfBirth: number, continents:string[], specialNeeds?: string){
        super("🐡", name, yearOfBirth, continents, specialNeeds);
    }
}

export class Shark extends Fish{
    constructor(name: string, yearOfBirth: number, continents:string[], specialNeeds?: string){
        super("🦈", name, yearOfBirth, continents, specialNeeds);
    }
}

export class Clownfish extends Fish{
    constructor(name: string, yearOfBirth: number, continents:string[], specialNeeds?: string){
        super("🤡", name, yearOfBirth, continents, specialNeeds);
    }
}

export default Fish;