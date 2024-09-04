import { Shape } from "./inheritance";


class Reactangle extends Shape {
    constructor(width , height , colour) {
        super(colour); //super should be first
        this.width = width;
        this.height = height;
        
    }

    area (){
        const area = this.width * this.height
        return area;
    }

    paint(){
     super.paint();
    }
}

const react = new Reactangle(10,788,'red');
react.paint();
console.log(react.area());

 