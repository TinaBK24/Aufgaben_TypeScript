import Beverage from "./Beverage";

export enum TeaFlavor {
    Green = "Green",
    Black = "Black",
    Chai = "Chai",
    Peppermint = "Peppermint"
}

class Tea extends Beverage {
    _flavor: TeaFlavor;

    constructor(name: string, price: number, flavor: TeaFlavor) {
        super(name, price);
        this._flavor = flavor;
    }
}

export default Tea;