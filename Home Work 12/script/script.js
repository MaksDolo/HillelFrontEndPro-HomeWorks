// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).

// let step = 0.5;
// for (let number = 20; number <= 30; number = number + step) {
//     console.log(number);
// }

// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

// let oneDollar = 27;
// for (let dollar = 10; dollar <= 100; dollar = dollar + 10) {
//     let ua = dollar * oneDollar;
//     console.log(`${dollar} долларів коштує ${ua} гривень`);
// }

// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

// const N = 100;
// for (let i = 1; i <= N; i++) {
//     let square = i * i;
//     if (square <= N) {
//         console.log(`${i}^2 = ${square}`)
//     }
// }

// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

// const inputNumber = parseInt(prompt('Введіть ціле число:'));
// function isPrime(number) {
//     if (number <= 1) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// if (isPrime(inputNumber)) {
//     console.log(`Число ${inputNumber} - просте`);
// } else {
//     console.log(`Число ${inputNumber} - не просте`);
// }

// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

// const inputNumber = parseInt(prompt('Введіть ціле число:'));
// function isPowerOfThree(degree) {
//     if (degree <= 0) return false;
//     while (degree % 3 === 0) {
//         degree = degree / 3;
//     }
//         return degree === 1;
// }
// if (isPowerOfThree(inputNumber)) {
//     console.log(`${inputNumber} Можна отримати`);
// } else {
//     console.log(`${inputNumber} Не можна отримати`);
// }
