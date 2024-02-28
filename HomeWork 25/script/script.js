"use strict"

class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }

    static SIZE_SMALL = { price: 50, calories: 20 };
    static SIZE_LARGE = { price: 100, calories: 40 };
    static STUFFING_CHEESE = { price: 10, calories: 20 };
    static STUFFING_SALAD = { price: 20, calories: 5 };
    static STUFFING_POTATO = { price: 15, calories: 10 };
    static TOPPING_MAYO = { price: 20, calories: 5 };
    static TOPPING_SPICE = { price: 15, calories: 0 };

    addTopping(topping) {
        this.toppings.push(topping);
    }

    getCalories() {
        let totalCalories = this.size.calories + this.stuffing.calories;
        this.toppings.forEach((topping) => {
        totalCalories += topping.calories;
        });
    return totalCalories;
    } 

    getPrice() {
    let totalPrice = this.size.price + this.stuffing.price;
    this.toppings.forEach((topping) => {
        totalPrice += topping.price;
    });
    return totalPrice;
    }
}

var hamburger = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_CHEESE);
hamburger.addTopping(Hamburger.TOPPING_SPICE);
console.log("Calories: " + hamburger.getCalories());
console.log("Price: " + hamburger.getPrice());
hamburger.addTopping(Hamburger.TOPPING_SPICE);
console.log("Price with sauce: " + hamburger.getPrice());
