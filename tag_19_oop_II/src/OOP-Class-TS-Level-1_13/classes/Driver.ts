import Car from "./Car";
import { CarType } from "./CarType";

class Driver {
    private _firstName: string;
    private _lastName: string;
    private _age: number;
    private _car: Car;
    private _licenseFromYear: number

    constructor(firstName: string, lastName: string, age: number, car: Car, licenseFromYear: number){
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
        this._car = car;
        this._licenseFromYear = licenseFromYear;
    }

    get firstName(): string{
        return this._firstName;
    }

    get lastName(): string{
        return this._lastName;
    }

    get age(): number{
        return this._age;
    }

    get car(): Car{
        return this._car;
    }

    get licenseFromYear(): number{
        return this._licenseFromYear;
    }

    getCarType(): CarType {
        return this._car.carType;
    }
}

export default Driver;