const array = [1, 2, 3, 4, 5, 24, 6, 7, 8, 9, 10,];

function removeElement(array, item) {
    const indexElement = array.indexOf(item);
    if (indexElement !== -1) {
        array.splice(indexElement, 1);
        console.log(array);
    } else {
        console.log('Похоже вы выбрали несуществующий элемент в этом массиве.');
    }
}

removeElement(array, 24);
