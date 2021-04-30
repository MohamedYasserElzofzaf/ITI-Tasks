/* 2. Display the area and perimeter of an object 
created from using Rectangle Constructor that has width and height properties and 
2 extended methods (using prototype property) for 
calculating area, perimeter. 
Override .toString() function to display a message declaring the width, height, area and perimeter of the created object. 
Create Class Property that counts numbers of created objects and Class method to retrieve it.*/

function rectangle(w, h) {
    return {
        recWidth: w,
        recHeight: h,
        recArea: function() {
            var area = this.recWidth * this.recHeight;
            return area;
        },
        recPerimeter: function() {
            var perimeter = this.recWidth + this.recHeight;
            return perimeter * 2;
        },
    };
}
var rec = rectangle(5, 7);
console.log(
    "The width is : " +
    rec.recWidth +
    " ,The height is : " +
    rec.recHeight +
    " ,The Area is : " +
    rec.recArea() +
    " , The perimeter is : " +
    rec.recPerimeter()
);