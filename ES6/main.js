// 1) Swap the values of x and y using destructuring
let x = 5;
let y = 9;
[x, y] = [y, x];
console.log(`The new value of x is ${x} , the new value of y is ${y}`);

// =============================================================
/*
2) Using rest parameter and spread operator 
return min and max value from any array passed to function 
call and display each of them separately after function call 
note: array length is not fixed 
*/

function compare(...A) {
    let max = Math.max(...A);
    let min = Math.min(...A);
    return [max, min];
}
// let max, min;

let [max, min] = compare(10, 20, 30, 60, 1);
console.log(max);
console.log(min);