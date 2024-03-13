"use strict"

function generateList(array) {
    const ul = document.createElement('ul');
    array.forEach(item => {
        const li = document.createElement('li');
        if (Array.isArray(item)) {
            li.appendChild(generateList(item));
        } else {
            li.textContent = item;
        }
        ul.appendChild(li);
    });
    return ul;
}
const exampleArray = [1, 2, 3, 4, 67];
const exampleList = generateList(exampleArray);
document.body.appendChild(exampleList);

