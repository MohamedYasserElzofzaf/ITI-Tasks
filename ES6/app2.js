/*
    2) Create a generator that returns fibonacci series that takes only one parameter. 
    Make two different implementations as described below:
    a. the parameter passed determines the number of elements displayed from the series.
    b. the parameter passed determines the max number of the displayed series should not exceed its value.
*/

function* fibonacci(n) {
    let x = 0;
    let y = 1;
    yield 0;
    yield 1;
    for (let f = 0; f < n - 1; f++) {
        let next = x + y;
        yield next;
        x = y;
        y = next;
    }
}

let iter = fibonacci(3);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

// =============================================================

function* fibonacci2(max) {
    let x = 0;
    let y = 1;
    yield 0;
    yield 1;
    let next = 0;
    while (true) {
        next = x + y;
        if (next > max) break;
        yield next;
        x = y;
        y = next;
    }
}
let iter2 = fibonacci2(3);
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());