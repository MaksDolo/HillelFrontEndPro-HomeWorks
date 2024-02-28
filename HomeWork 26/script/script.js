"use strict"

class SuperMath {
    check(obj) {
        const { X, Y, znak } = obj;

        if (!this.isValidOperator(znak)) {
            console.log("Некоректний знак операції.");
            this.input();
            return;
        }

        const result = this.performOperation(X, Y, znak);
        console.log(`Результат: ${result}`);
    }

    input() {
        const X = parseFloat(prompt("Введіть перше число:"));
        const Y = parseFloat(prompt("Введіть друге число:"));
        const znak = prompt("Введіть знак операції (+, -, /, *, %):");

        if (!this.isValidOperator(znak)) {
            console.log("Некоректний знак операції.");
            return;
        }

        const obj = { X, Y, znak };
        this.check(obj);
    }

    isValidOperator(znak) {
        const operators = ["+", "-", "/", "*", "%"];
        return operators.includes(znak);
    }

    performOperation(X, Y, znak) {
        switch (znak) {
            case "+":
                return X + Y;
            case "-":
                return X - Y;
            case "/":
                return X / Y;
            case "*":
                return X * Y;
            case "%":
                return X % Y;
            default:
                return NaN;
        }
    }
}

const p = new SuperMath();
const obj = {
    X: parseFloat(prompt("Введіть перше число:")),
    Y: parseFloat(prompt("Введіть друге число:")),
    znak: prompt("Введіть знак операції (+, -, /, *, %):")
};
p.check(obj);
