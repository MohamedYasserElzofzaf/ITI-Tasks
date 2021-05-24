class polygon {
    width = 4;
    height = 5;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    Area() {
        return this.width * this.height;
    }
}
class rectangle extends polygon {
    constructor(width, height) {
        super(width, height);
    }
    toString() {
        return `Width: ${this.width}, Height: ${this.height}, Area: ${this.Area}`;
    }
}