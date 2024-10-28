import Animal from "./Animal";
import { EnclosureId } from "./Enclosure";

class Reptile extends Animal{
    constructor(emoji: string, name: string, yearOfBirth: number, continents: string[], specialNeeds?: string){
        super(emoji, name, yearOfBirth, continents,EnclosureId.ReptileHouse, specialNeeds);
    }
}

export class Krokodil extends Reptile {
    constructor(name: string, yearOfBirth: number, continents:string[], specialNeeds?: string) {
        super("🐊", name, yearOfBirth, continents, specialNeeds);
    }
}

export class Turtle extends Reptile {
    constructor(name: string, yearOfBirth: number, continents:string[], specialNeeds?: string) {
        super("🐢", name, yearOfBirth, continents, specialNeeds);
    }
}

export class Lizard extends Reptile {
    constructor(name: string, yearOfBirth: number, continents:string[], specialNeeds?: string) {
        super("🦎", name, yearOfBirth, continents, specialNeeds);
    }
}

export default Reptile;