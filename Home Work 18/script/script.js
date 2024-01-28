"use strict"

// const arr = [1, 2, 3, 23, 'qwerty', 4, 'hello', 'word', true,];

// function getAverage(arr) {
//     let countElement = 0;
//     let sum = 0;
//     arr.forEach(element => {
//         if (typeof element === 'number') {
//             sum = element + sum;
//             countElement++;
//         }
//     });
//     return sum / countElement;
// };

// const resultAverage = console.log(getAverage(arr));

// ============================================================================

// let x = prompt('Input the X:');
// const znak = prompt('Input the mathematical operation (+,-,*...):');
// let y = prompt('Input the Y:');
// doMath(x, znak, y);

// function doMath(x, znak, y) {
//     const mathOperations = {
//         '+': (a, b) => a + b,
//         '-': (a, b) => a - b,
//         '*': (a, b) => a * b,
//         '/': (a, b) => a / b,
//         '^': (a, b) => Math.pow(a, b),
//         '%': (a, b) => a % b,
//     };
//     x = parseFloat(x);
//     y = parseFloat(y);
//     if (isNaN(x) || isNaN(y)) {
//         return;
//     };
//     const operation = mathOperations[znak];
//         if (operation) {
//             console.log(operation(x, y));
//         };
// };

// =================================================================================

// function getArrayFromUser() {
//     let inputRows = prompt(`Input number of rows`);
//     let inputColumns = prompt(`Input number of columns`);
//     let arr = [];
//     for (let i = 0; i < inputRows; i++) {
//         arr[i] = new Array(inputColumns);
//         arr[i].forEach(function (_, index, array) {
//             array[index] = prompt(`Input namber of element [${i}]`)
//         })
//     }
//     return arr;
// }

// let twoArray = getArrayFromUser();
// console.log(twoArray);

// =======================================================================

// function getDeletedSymbols() {
//     let inputRow = prompt(`Input Row:`);
//     let deletedSymbols = prompt(`Deleted symbols:`);
//     deletedSymbols = deletedSymbols.split(' ');
//     const expression = new RegExp(`[${deletedSymbols.join(' ')}]`, 'g');
//     const newRow = inputRow.replace(expression, '');
//     return newRow;
// };

// let result = getDeletedSymbols();
// console.log(result);

