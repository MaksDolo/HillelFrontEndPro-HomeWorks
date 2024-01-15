const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

//! Знайти суму та кількість позитивних елементів.

// const positiveNumber = array.filter(function (item, index, array) {
//     return item > 0;
// });
// const sumArr = array.reduce(function (previousValue, item, index, array) {
//     return item + previousValue;
// }, 0);
// const positiveIndex = positiveNumber.length;
// console.log(`Количество положительных чисел: ${positiveIndex}`);
// console.log(`Сумма всех положительных чисел массива: ${sumArr}`);

//! Знайти мінімальний елемент масиву та його порядковий номер.

// const minNumber = Math.min(...array);
// const minIndex = array.indexOf(minNumber);
// console.log(`Элемент: ${minNumber}`);
// console.log(`Индекс элемента: ${minIndex}`);

//! Знайти максимальний елемент масиву та його порядковий номер.

// const maxNumber = Math.max(...array);
// const maxIndex = array.indexOf(maxNumber);
// console.log(`Элемент: ${maxNumber}`);
// console.log(`Индекс элемента: ${maxIndex}`);

//! Визначити кількість негативних елементів.

// const negativeNumber = array.filter(function (item, index, array) {
//     return item < 0;
// });
// const negativeLength = negativeNumber.length;
// console.log(`Негативные элементы: ${negativeLength}`);

//! Знайти кількість непарних позитивних елементів.

// const positiveNum = array.filter(function (item, index, array) {
//     return item > 0 && item % 2 !== 0;
// });
// const positiveLength = positiveNum.length;
// console.log(`Непарные позитивные элементы: ${positiveLength}`);

// !Знайти кількість парних позитивних елементів.

// const positiveNum = array.filter(function (item, index, array) {
//     return item > 0 && item % 2 == 0;
// });
// const positiveLength = positiveNum.length;
// console.log(`Парные позитивные элементы: ${positiveLength}`);

// !Знайти суму парних позитивних елементів.

// const positiveNum = array.filter(function (item, index, array) {
//     return item > 0 && item % 2 == 0;
// });
// const sumPositive = positiveNum.reduce(function(previousValue, currentValue,  index, array) {
//     return previousValue + currentValue;
// });
// console.log(`Сумма парных позитивных элементов: ${sumPositive}`);

// !Знайти суму непарних позитивних елементів.

// const positiveNum = array.filter(function (item, index, array) {
//     return item > 0 && item % 2 !== 0;
// });
// const sumPositive = positiveNum.reduce(function(previousValue, currentValue,  index, array) {
//     return previousValue + currentValue;
// });
// console.log(`Сумма непарных позитивных элементов: ${sumPositive}`);

//!Знайти добуток позитивних елементів.

// const positiveNumber = array.filter(function (item, index, array) {
//     return item > 0;
// });
// const sumPositive = positiveNumber.reduce(function(previousValue, currentValue,  index, array) {
//     return previousValue * currentValue;
// });
// console.log(`Умножение всех позитивных элементов: ${sumPositive}`);

// !Знайти найбільший серед елементів масиву, остальні обнулити.

// const maxNumber = Math.max(...array);
// const resetArray = array.map(function (currentValue) {
//     return currentValue === maxNumber ? currentValue : 0;
// });
// console.log(`Самое большое число: ${maxNumber}`);

