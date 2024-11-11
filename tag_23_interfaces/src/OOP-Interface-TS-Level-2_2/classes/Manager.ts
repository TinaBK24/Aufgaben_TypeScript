import Employee from "./Employee";

class Manager extends Employee {
    private _assignedEmployees: Employee[] = [];

    constructor(name: string, age: number, position: string, startDate: Date){
        super(name, age, position, startDate)
    }

    public addSubordinate(employee: Employee) {
        this._assignedEmployees.push(employee);
        console.log(`${employee._name} ist als ${employee._position} in ${this._name}s Team`);
    }
}

export default Manager;