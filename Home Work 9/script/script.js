let numOrStr = prompt('Input number or string');
console.log(numOrStr);

switch (true) {
    case numOrStr === null:
        console.log('Ви скасували');
        break;
    case numOrStr.trim() === '':
        console.log('Empty String');
        break;
    case isNaN(+numOrStr):
        console.log('Number is Ba_NaN');
        break;
    default:
        console.log('OK!');
        break;
}


