/* 
    1- Using constructor DP Display the area and perimeter of an object
    created from using Rectangle Constructor 
    that has width and height properties and 2 extended methods calculating area, perimeter. 
    Override .toString() function to display a message declaring the width, height, area and perimeter of the created object. 
    Create Class Property that counts numbers of created objects and Class method to retrieve it.
*/

function Rectangle(_height, _width) {
    Rectangle.Count++;

    this.height = _height;
    this.width = _width;

    this.area = function() {
        return this.height * this.width;
    };

    this.perimeter = function() {
        return 2 * (this.height + this.width);
    };
    this.toString = function() {
        console.log(
            `The Height is : ${this.height} , the width is : ${
        this.width
      } , Area is : ${this.area()} , Perimeter is : ${this.perimeter()} `
        );
    };
    Rectangle.getCounter = function() {
        return Rectangle.Count;
    };
}

Rectangle.Count = 0;

let rectangle = new Rectangle(4, 5);

rectangle.toString();