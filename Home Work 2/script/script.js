alert(`Введіть ваші данні у три наступних рядка:`);
let textInputOne = prompt('Ваше прізвище:');
let textInputTwo = prompt(`Ваше ім'я:`);
let textInputThree = prompt('По батькові:');
alert(`Ваші данні: ${textInputOne} ${textInputTwo} ${textInputThree}`);

// ------------------------------------------------------------------------------

let numberInput = prompt(`ВВедіть п'ятизначне число:`);
let numberConclusion = numberInput.toString().split('').map(Number);
console.log(numberConclusion.join(' '));