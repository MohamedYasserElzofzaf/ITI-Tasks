/* 
    Display the area and perimeter of an object created from using Rectangle Constructor 
    that has width and height properties and 
    2 extended methods (using prototype property) for calculating area, perimeter. 
    Override .toString() function to display a message declaring the width, height,
    area and perimeter of the created object. 
    Create Class Property that counts numbers of created objects and Class method to retrieve it.
*/

var rectangle = function(w, h) {
    this.width = w;
    this.height = h;
    rectangle.count = (rectangle.count || 0) + 1;
    console.log(rectangle.count);
};
rectangle.prototype.area = function() {
    return this.height * this.width;
};
rectangle.prototype.perimeter = function() {
    return 2 * (this.height + this.width);
};
rectangle.prototype.toString = function() {
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