import Person from './Person';

class SchoolClass {
    _id: number;
    _name: string;
    _endDate?: string;
    _peopleArr?: Person[];

    constructor(id: number, name: string, peopleArr?: Person[]){
        this._id = id;
        this._name = name;
        this._peopleArr = peopleArr;
        console.log("School class creation successful");
    }

    addPerson(person: Person){
        this._peopleArr?.push(person);
    }
}

export default SchoolClass;