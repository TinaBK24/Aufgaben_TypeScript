class SchoolClass {
    _id: number;
    _name: string;
    _endDate?: string;

    constructor(id: number, name: string){
        console.log("School class creation successful");
        this._id = id;
        this._name = name;
    }
}

export default SchoolClass;