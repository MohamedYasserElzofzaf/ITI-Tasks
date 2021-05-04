
var scape =function(wd,hei){
if(this.constructor==scape){
  throw "create innstance from scape is not allowed";
}
    this.width = wd;
    this.height = hei;
}

var rectangle = function (wd, hei) {
    scape.call(this,wd,hei);
    rectangle.count=(rectangle.count||0)+1;
    // if(rectangle.count>=2){
    //   throw "create innstance from scape is not allowed";
    //  }
     console.log(rectangle.count);
  };
  var Square = function (wd, hei) {
    if(arguments[0]!==arguments[1]){
      throw "The height must be equal to the width"
    }
    rectangle.call(this,wd,hei);
  };

rectangle.prototype=Object.create(scape.prototype);
rectangle.prototype.constructor=rectangle;

Square.prototype=Object.create(rectangle.prototype);
Square.prototype.constructor=Square;


  rectangle.prototype.area = function () {
    return this.height * this.width;
  };
  rectangle.prototype.perimeter = function () {
    return 2 * (this.height + this.width);
  };
  rectangle.prototype.toString = function () {
    return "width = " + this.width +"; heigth = " +this.height +"; area = " +this.area() +"; perimeter = " +this.perimeter()
  };
  Square.prototype.perimeter = function () {
    return 4 * (this.height);
  };
 

