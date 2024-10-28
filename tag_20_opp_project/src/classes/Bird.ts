import Animal from "./Animal";
import { EnclosureId } from "./Enclosure";

class Bird extends Animal{
    constructor(emoji: string, name: string, yearOfBirth: number, continents: string[], specialNeeds?: string){
        super(emoji, name, yearOfBirth, continents, EnclosureId.JungleHabitat,specialNeeds);
    }
}

export class Parrot extends Bird{
    constructor(name: string, yearOfBirth: number, continents:string[], specialNeeds?: string){
        super("🐦", name, yearOfBirth, continents, specialNeeds);
    }
}

export class Swan extends Bird{
    constructor(name: string, yearOfBirth: number, continents:string[], specialNeeds?: string){
        super("🦢", name, yearOfBirth, continents, specialNeeds);
    }
}

export class Eagle extends Bird{
    constructor(name: string, yearOfBirth: number, continents:string[], specialNeeds?: string){
        super("🦅", name, yearOfBirth, continents, specialNeeds);
    }
}

export default Bird;