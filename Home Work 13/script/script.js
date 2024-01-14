const arrInput = prompt('Введите элементы массива (Минимум 4 символа через пробел)');
const arr = arrInput.split(' ');
if (arr.length >= 4) {
    arr.sort((a, b) => a - b);
    console.log(`Отсортированный массив по возрастанию: ${arr}`);
    arr.splice(1, 3);
    console.log(`Удалены со 2 по 4 элемент с массива: ${arr}`);
} else {
    console.log('Ошибка! Нужно ввести минимум 4 символов');
}