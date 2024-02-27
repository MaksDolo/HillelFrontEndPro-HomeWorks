"use strict"

class Person {
constructor(name, gender) {
    this.name = name;
    this.gender = gender;
    }
}
class Apartment {
constructor() {
    this.residents = [];
}
addResident(person) {
    this.residents.push(person);
}
}

class House {
    constructor(maxApartments) {
    this.apartments = [];
    this.maxApartments = maxApartments;
    }

    addApartment(apartment) {
    if (this.apartments.length < this.maxApartments) {
        this.apartments.push(apartment);
    } else {
        console.log("Максимальна кількість квартир вже досягнута.");
    }
}
}

const userNumOne = new Person("Олексій", "чоловіча");
const userNumTwo = new Person("Максим", "чоловіча");
const userNumThree = new Person("Наталія", "жіноча");

const apartmentNumOne = new Apartment();
const apartmentNumTwo = new Apartment();

apartmentNumOne.addResident(userNumOne);
apartmentNumOne.addResident(userNumTwo);
apartmentNumTwo.addResident(userNumThree);

const createHouse = new House(2);

createHouse.addApartment(apartmentNumOne);
createHouse.addApartment(apartmentNumTwo);

console.log(createHouse);
