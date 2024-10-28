import { EnclosureId } from "./Enclosure";

class Animal {
    _emoji: string;
    _name: string;
    _yearOfBirth: number;
    _continents: string[];
    _enclosureId: EnclosureId;
    _specialNeeds?: string;

    constructor(emoji: string, name: string, yearOfBirth: number, continents: string[], enclosureId: EnclosureId, specialNeeds?: string){
        this._emoji = emoji;
        this._name = name;
        this._yearOfBirth = yearOfBirth;
        this._continents = continents;
        this._enclosureId = enclosureId;
        this._specialNeeds = specialNeeds;
    }

    get age(): number{
        return new Date().getFullYear() - this._yearOfBirth;
    }
}

export default Animal;