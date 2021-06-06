/* 
    1- Using constructor DP Display the area and perimeter of an object
    created from using Rectangle Constructor 
    that has width and height properties and 2 extended methods calculating area, perimeter. 
    Override .toString() function to display a message declaring the width, height, area and perimeter of the created object. 
    Create Class Property that counts numbers of created objects and Class method to retrieve it.
*/

function Rectangle(width, height) {
    this.width = width;
    this.height = height;
    this.area = function() {
        return this.width * this.height;
    };
    this.perimeter = function() {
        return 2 * (this.width + this.height);
    };
    this.toString = function() {
        return `The Height is : ${this.height} , the width is : ${this.width} , Area is : ${this.area} , Perimeter is : ${this.perimeter} `;
    };
}