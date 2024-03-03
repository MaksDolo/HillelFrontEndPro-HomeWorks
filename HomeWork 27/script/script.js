"use strict"

const textField = document.getElementById('textBar');
const sidebar = document.getElementById('divBar');
    textField.addEventListener('focus', () => {
    sidebar.style.display = 'block';
});

    textField.addEventListener('blur', () => {
    sidebar.style.display = 'none';
});