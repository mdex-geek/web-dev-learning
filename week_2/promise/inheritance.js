
export class Shape{
    constructor(colour){
        this.colour = colour;
    }

    paint(){
        console.log(`colour is  ${this.colour}`)
    }
    area(){
        throw new Error("area implemantion should be in sub-class ");
        
    }
    discription(){
        console.log(`this shape colour is ${this.colour}`);
    }
}

class Circle extends Shape {
    constructor(radius, color) {
        super(color);  // Call the parent class constructor to set the color
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }

    discription() {
        return `A circle with radius ${this.radius} and color ${this.colour}`;
    }
}
var circle = new Circle(10, 'red');
console.log(circle.area());
console.log(circle.discription());