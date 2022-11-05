//Task1
"use strict";
/*
Створіть об'єкт calculator, який буде мати методи:

1. read() запитує два значення з допомогою prompt() і зберігає в властивостях об'єкта;
2. sum() повертає суму цих двох значень;
3. mul() повертає добуток цих двох значень.
*/
var calculator = {
    a: 0,
    b: 0,
    read: function () {
        this.a = Number(prompt("Enter a"));
        this.b = Number(prompt("Enter b"));
    },
    sum: function () {
        let s = this.a + this.b;
        return s;
    },
    mul: function () {
        return this.a * this.b;
    }
    // Ваш код
};
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
