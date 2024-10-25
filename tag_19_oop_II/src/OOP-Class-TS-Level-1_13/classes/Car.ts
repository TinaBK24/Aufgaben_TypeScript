import { CarType } from './CarType';

class Car {
    private _brand: string;
    private _constructionYear: number;
    private _currentSpeed: number;
    private _carType: CarType;

    constructor(brand: string, constructionYear: number, currentSpeed: number, carType: CarType){
        this._brand = brand;
        this._constructionYear = constructionYear;
        this._currentSpeed = currentSpeed;
        this._carType = carType;
    }

    get brand(): string{
        return this._brand;
    }

    set brand(value: string){
        this._brand = value;
    }

    get constructionYear(): number{
        return this._constructionYear;
    }

    get currentSpeed(): number{
        return this._currentSpeed;
    }

    set currentSpeed(value: number) {
        this._currentSpeed = value;
    }

    getSpeedInfo(): string{
        if(this._currentSpeed <= 40){
            return "Driving slowly";
        } else if (this._currentSpeed > 40 && this._currentSpeed <= 70) {
            return "Driving normally";
        } else if (this._currentSpeed > 70 && this._currentSpeed <= 120) {
            return "Driving fast";
        } else if (this._currentSpeed > 120 && this._currentSpeed <= 190) {
            return "Driving really fast";
        } else {
            return "WTF";
        }
    }

    get carType(): CarType{
        return this._carType;
    }
}

export default Car;