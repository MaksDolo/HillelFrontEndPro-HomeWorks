"use strict"

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayInfo() {
        console.log(`Ім'я: ${this.name}, Вік: ${this.age}`);
    }
}

class Car {
    constructor(brand, model, year, licensePlate, owner) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.licensePlate = licensePlate;
        this.owner = owner;
        this.setOwner(owner);
    } 

    setOwner(owner) {
    if (owner.age >= 18) {
        this.owner = owner;
    } else {
        console.log("Власник повинен бути старше 18 років!");
    }
    }

    displayInfo() {
        console.log(`Марка: ${this.brand}, Модель: ${this.model}, Рік: ${this.year}, Номерний знак: ${this.licensePlate}`);
        console.log("Власник:");
        this.owner.displayInfo();
    }
}
const personNumOne = new Person("Олексій", 19);
const personNumTwo = new Person("Максим", 17);

const car1 = new Car("Toyota", "Corolla", 2017, "BC1434AС", personNumOne);
const car2 = new Car("BWM", "E39", 2004, "BH7700HH", personNumTwo);

car1.displayInfo();
console.log('**********************************');
car2.displayInfo();
