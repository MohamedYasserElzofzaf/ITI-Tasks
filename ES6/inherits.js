class polygon {
    width = 4;
    height = 5;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calcArea() {
        return this.width * this.height;
    }
}
class rectangle extends polygon {
    constructor(width, height) {
        super(width, height);
    }
    toString() {
        return `Width: ${this.width}, Height: ${
      this.height
    }, Area: ${this.calcArea()}`;
    }
}
class square extends polygon {
    constructor(side) {
        super(side, side);
    }
    toString() {
        return `Side: ${this.width}, Area: ${this.calcArea()}`;
    }
}

class traingle extends polygon {
    constructor(base, height) {
        super(base, height);
    }
    calcArea() {
        return (this.width * this.height) / 2;
    }
    toString() {
        return `Base: ${this.base}, Height: ${
      this.height
    }, Area: ${this.calcArea()}`;
    }
}

class circle {
    constructor(redius) {
        this.redius = redius;
    }
    calcArea() {
        return this.redius * this.redius * Math.PI;
    }
    toString() {
        return `Redius: ${this.redius}, Area: ${this.calcArea()}`;
    }
}

let rec = new rectangle(50, 30);
let sqr = new square(25);
let trai = new traingle(70, 40);
let cir = new circle(30);

console.log(rec);
console.log(sqr);
console.log(trai);
console.log(cir);