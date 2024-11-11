import Animal from "./Animal";

export enum EnclosureId {
    SavannahHabitat = "Savannah Habitat",
    JungleHabitat = "Jungle Habitat",
    AquaticHabitat = "Aquatic Habitat",
    ReptileHouse = "Reptile House"
}

class Enclosure {
    _id: EnclosureId;
    _name: string;
    _builtInYear: number;
    _animals: Animal[];

    constructor(id: EnclosureId, name: string, builtInYear: number, animals: Animal[]){
        this._id = id;
        this._name = name;
        this._builtInYear = builtInYear;
        this._animals = animals;
    }

    addAnimal(animal: Animal){
        this._animals.push(animal);
    }
}

export default Enclosure;