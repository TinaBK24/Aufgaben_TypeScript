class IceCreamFlavor {
    _name: string;
    _price: number;
    _isPopular: boolean;
    _numberOfScoops: number;
    _description?: string;

    constructor(
        name: string = "",
        price: number = 0,
        isPopular: boolean = false,
        numberOfScoops: number,
        description?: string,
    ) {
        this._name = name;
        this._price = price;
        this._isPopular = isPopular;
        this._numberOfScoops = numberOfScoops;
        this._description = description;
    }
    
    getTotalPrice(numberOfScoops?: number){
        numberOfScoops = this._numberOfScoops;
        console.log(`Gesamtpreis: ${this._price * numberOfScoops} Euro`);
    }

    printInfo(){
        if(this._isPopular){
            console.log(`Flavor ${this._name} is popular and costs ${this._price} Euro.`);
        } else {
            console.log(`Flavor ${this._name} is not popular and costs ${this._price} Euro.`);
        }
    }

    getLengthOfDescription(): number{
        return this._description ? this._description.length : 0;
    }
}

export default IceCreamFlavor;