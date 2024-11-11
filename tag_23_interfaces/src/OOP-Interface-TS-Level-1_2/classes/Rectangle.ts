import IShape from "../contracts/IShape";

class Rectangle implements IShape {
    _name: string;
    _color: string;
    _width: number;
    _height: number;
    _isRound: boolean = false;

    constructor(color: string, width: number, height: number) {
        this._name = "rectangle";
        this._color = color;
        this._width = width;
        this._height = height;
    }

    public draw(): void {
        console.log("Drawing ", this._name);
    }
}

export default Rectangle;