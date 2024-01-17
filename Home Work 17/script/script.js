const characters = 'gusfhpoghsodhagoh4r9ghsdonvuhware9ugfhsdjngiupwyhW90FGHJODSIH';

function generateKey(length, characters) {
    return Array.from({ length }, function () {
        let getRandomIndex = Math.round(Math.random() * characters.length);
        return characters[getRandomIndex];
    })
        .join('');
}; 

const key = generateKey(20, characters);
console.log(key);



