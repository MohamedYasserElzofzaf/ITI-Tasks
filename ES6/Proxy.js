/*
    2) Proxy 
    create a dynamic object using Proxy such that it has only the following properties
         name property that accepts only string of 7 characters
         address property that accepts only string value
         age property that accepts numerical value between 25 and 60
*/

var target = {};
var handler = {};
let myProxy = new Proxy(target, handler);