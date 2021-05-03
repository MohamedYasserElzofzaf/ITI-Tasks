/* 
    Make proper updates in your previous code of generating Rectangle object 
    that should inherit from Shape Constructor, 
    and create your Square constructor that inherits from Rectangle. 
    Prevent creating any object from shape, 
    allow creation of only rectangles and square Bonus: allow creation of only one square and one rectangle
*/
function shape(w, h) {
    if (this.constructor == shape) {
        throw "This behaviour isn't allowed";
    }
    this.width = w;
    this.height = h;
}

function rect(w, h) {
    shape.call(this, w, h);
    rect.count = (rect.count || 0) + 1;
    console.log(rect.count);
}

function Square(w, h) {
    if (args[0] !== args[1]) {
        throw "Make sure that the height is equal to the width";
    }
    rect.call(this, w, h);
}

rect.prototype = Object.create(shape.prototype);
rect.prototype.constructor = rect;

Square.prototype = Object.create(rect.prototype);
Square.prototype.constructor = Square;

rect.prototype.area = function() {
    return this.height * this.width;
};
rect.prototype.perimeter = function() {
    return 2 * (this.height + this.width);
};
rect.prototype.toString = function() {
    return (
        "width = " +
        this.width +
        "; height = " +
        this.height +
        "; area = " +
        this.area() +
        "; perimeter = " +
        this.perimeter()
    );
};
Square.prototype.perimeter = function() {
    return 4 * this.height;
};