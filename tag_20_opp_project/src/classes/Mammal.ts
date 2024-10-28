import Animal from "./Animal";
import { EnclosureId } from "./Enclosure";

class Mammal extends Animal {
    constructor(emoji: string, name: string, yearOfBirth: number, continents: string[], specialNeeds?: string) {
        super(emoji, name, yearOfBirth, continents, EnclosureId.SavannahHabitat, specialNeeds);
    }
}

export class Bear extends Mammal {
    constructor(name: string, yearOfBirth: number, continents:string[], specialNeeds?: string) {
        super("🐻", name, yearOfBirth, continents, specialNeeds);
    }
}

export class Monkey extends Mammal {
    constructor(name: string, yearOfBirth: number, continents:string[], specialNeeds?: string) {
        super("🐒", name, yearOfBirth, continents, specialNeeds);
    }
}

export class Lion extends Mammal {
    constructor(name: string, yearOfBirth: number, continents:string[], specialNeeds?: string) {
        super("🦁", name, yearOfBirth, continents, specialNeeds);
    }
}

export default Mammal;