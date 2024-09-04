class Reactangular {
    constructor (width,hight,color){
        this.width = width;
        this.hight = hight;
        this.color = color;
    }
    area(){
        const area = this.width * this.hight;
        return area;
    }
    paint(){
        console.log('reactangular color'+" " +this.color);
    }
}

const box = new Reactangular(2,4,'red');
console.log(box.area());
box.paint();