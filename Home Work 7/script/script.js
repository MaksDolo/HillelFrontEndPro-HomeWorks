const operationInput = prompt('Add, Sub, Mult or Div?');

if (operationInput === 'add') {
    let x = parseFloat(prompt('Input first number'));
    let y = parseFloat(prompt('Input second number'));
    let add = x + y;
    alert(`Sum = ${add}`);
} else if (operationInput === 'sub') {
    let x2 = parseFloat(prompt('Input first number'));
    let y2 = parseFloat(prompt('Input second number'));
    let sub = x2 - y2;
    alert(`Sub = ${sub}`);
} else if (operationInput === 'mult') {
    let x3 = parseFloat(prompt('Input first number'));
    let y3 = parseFloat(prompt('Input second number'));
    let mult = x3 * y3;
    alert(`Mult = ${mult}`);
} else if (operationInput === 'div') {
    let x4 = parseFloat(prompt('Input first number'));
    let y4 = parseFloat(prompt('Input second number'));
    let div = x4 / y4;
    alert(`Div = ${div}`);
} else {
    alert('Error');
}
