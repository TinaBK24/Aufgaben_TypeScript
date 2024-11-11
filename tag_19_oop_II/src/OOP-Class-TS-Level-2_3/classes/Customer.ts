class Customer {
    _name: string;
    _email: string;
    _address: string;
    _postalCode: number;
    _city: string;

    constructor(name: string, email: string, address: string, postalCode: number, city: string){
        this._name = name;
        this._email = email;
        this._address = address;
        this._postalCode = postalCode;
        this._city = city;
    }

    get name(): string{
        return this._name;
    }

    set name(value: string){
        if(value.length <= 60){
            this._name = value
        } else {
            console.error("Fehler: Der Name darf maximal 60 Zeichen lang sein.");
        }
    }
    get email(): string{
        return this._email;
    }

    set email(value: string){
        if(value.includes("@")){
            this._email = value;
        } else {
            console.error("Fehler: Die E-Mail-Adresse muss ein '@'-Zeichen enthalten.");
        }
    }
    get address(): string{
        return this._address;
    }

    set address(value: string){
        this._address = value;
    }
    get postalCode(): number{
        return this._postalCode;
    }

    set postalCode(value: number){
        if(value > 0 && value <= 99999 && value.toString().length === 5){
            this._postalCode = value;
        } else {
            console.error("Fehler: Die Postleitzahl muss 5-stellig sein und zwischen 00000 und 99999 liegen.");
        }
    }
    get city(): string{
        return this._city;
    }

    set city(value: string){
        this._city = value;
    }


}

export default Customer;