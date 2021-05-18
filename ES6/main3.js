/*
    3) Study new array api methods then 
    create the following methods and apply it on this array 
    var fruits = ["apple", "strawberry", "banana", "orange", "mango"];
    a. test that every element in the given array is a string
    b. test that some of array elements starts with "a"
    c. generate new array filtered from the given array with only elements that starts with "b" or "s"
    d. generate new array, each element of the new array contains a string declaring that you like the give fruit element
    e. use forEach to display all elements of the new array from previous point
*/
let fruits = ["apple", "strawberry", "banana", "orange", "mango"];
const boolA = fruits.every((fruit) => {
    return typeof fruit === "string";
});
console.log(boolA);

const boolB = fruits.some((fruit) => {
    return fruit.startsWith("a");
});
console.log(boolB);

let newFruits = fruits.filter((fruit) => {
    return fruit.startsWith("b") || fruit.startsWith("s");
});
console.log(newFruits);

let newFruits2 = fruits.map((fruit) => {
    return `I love ${fruit}`;
});
console.log(newFruits2);

newFruits2.forEach((fruit) => {
    console.log(fruit);
});