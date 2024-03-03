"use strict"

const tbody = document.querySelector('#myTable tbody');

    let count = 1;
    for (let i = 0; i < 10; i++) {
        const row = document.createElement('tr');

    for (let j = 0; j < 10; j++) {
        const cell = document.createElement('td');
        cell.textContent = count;
        count++;
        row.appendChild(cell);
    }
        tbody.appendChild(row);
    }