import IEmployee from "../contracts/IEmployee";

class Employee implements IEmployee {
    _name: string;
    _age: number;
    _position: string;
    _startDate: Date;

    constructor(name: string, age: number, position: string, startDate: Date){
        this._name = name;
        this._age = age;
        this._position = position;
        this._startDate = startDate;
    }

    public getYearsOfService(): number {
        const currentYear = new Date().getFullYear();
        return currentYear - this._startDate.getFullYear();
    }
}

export default Employee;