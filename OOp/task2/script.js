var rectangle = function (wd, hei) {
  this.width = wd;
  this.height = hei;
  rectangle.count=(rectangle.count||0)+1;
  console.log(rectangle.count);
};
rectangle.prototype.area = function () {
  return this.height * this.width;
};
rectangle.prototype.perimeter = function () {
  return 2 * (this.height + this.width);
};
rectangle.prototype.toString = function () {
  return "width = " + this.width +"; heigth = " +this.height +"; area = " +this.area() +"; perimeter = " +this.perimeter()
};
