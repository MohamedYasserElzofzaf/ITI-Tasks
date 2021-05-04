// B.2. Using Constructor method for creating Objects,
// write a script that allows you to create a rectangle object that
//  Should have width and height properties.
//  Implement two methods for calculating its area and perimeter.
//  Implement displayInfo() function to display a message declaring the width, height, area
// and perimeter of the created object.
//  perimeter of a Rectangle	P= 2(l + b)
// Area of a Rectangle	A = l × b

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