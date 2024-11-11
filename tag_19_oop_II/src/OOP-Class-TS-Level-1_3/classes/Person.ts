export enum Gender {
    Male = "Male",
    Female = "Female"
}

class Person {
    private _name: string;
    private _birthday: Date;
    private _gender: Gender;

    constructor(name: string, birthday: Date, gender: Gender){
        this._name = name;
        this._birthday = birthday;
        this._gender = gender;
    }

    get name(): string{
        return this._name;
    }

    set name(value: string){
        this._name = value;
    }
    
    get gender(): Gender{
        return this._gender;
    }
    
    set gender(value: Gender){
        this._gender = value;
    }

    get birthday(): Date{
        return this._birthday;
    }
}

export default Person;