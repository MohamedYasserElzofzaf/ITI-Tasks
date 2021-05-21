/*
    2) Proxy 
    create a dynamic object using Proxy such that it has only the following properties
         name property that accepts only string of 7 characters
         address property that accepts only string value
         age property that accepts numerical value between 25 and 60
*/
/*
var target = {
    name: "Mohamed Yasser",
    address: "nasser city / cairo",
    age: 61,
};*/
var handler = {
    set: function(obj, prop, val) {
        if (prop === "name") {
            if (typeof val !== "string" && val.length === 7)
                throw new TypeError("Not req length");
            else {
                obj[prop] = val;
            }
        }
        if (prop === "address") {
            if (typeof val !== "string") throw new TypeError("not req type");
            else {
                obj[prop] = val;
            }
        }
        if (prop === "age") {
            if (typeof val === "number" && val < 60 && val > 25) obj[prop] = val;
            else {
                throw new TypeError("not req range");
            }
        }
    },
};
const myProxy = new Proxy({}, handler);
myProxy.name = "Mohamed Yasser";
myProxy.age = 41;
myProxy.address = "cairo";

console.log(myProxy.age);
console.log(myProxy.name);
console.log(myProxy.address);