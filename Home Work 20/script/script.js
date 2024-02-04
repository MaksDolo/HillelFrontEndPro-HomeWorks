'use strict'

function getSum() {
    let sum = 0;
    return function totalSum(x) {
        sum = sum + x;
        return sum;
    }
}

const result = getSum();
console.log(result(20));
console.log(result(20));
console.log(result(20));