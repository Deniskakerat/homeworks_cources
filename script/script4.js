//Task1
"use strict";
/*
Task  2
Створіть тип об'єктів Суматор, з наступним функціоналом:
1. Приватна властивість __firstNumber;
2. Приватна властивість __secondNumber;
3. Публічна властивість  result;
4. Приватний метод __calc(), який записує в result суму властивостей __firstNumber та __secondNumber;
5. Єдині методи геттер-сеттер для властивостей __firstNumber і __secondNumber, під час роботи методів
у якості сеттерів, повинна відбуватися валідація (встановлювати можна лише значення типу Number),
якщо валідація відбулась успішно, повинен викликатись метод __calc(). Виходить, що при успішній установці
чи __firstNumber чи __secondNumber, відбувається перерахунок result.
 */

function Sumator(number1, number2) {
    this.result = +0;
    this.__firstnumber = +0; // Приватна властивість
    this.__secondNumber = +0; // Приватна властивість
    if (this.numberValid(number1)) {
        this.__firstnumber = number1;
        this.__calc();
    }
    if (this.numberValid(number2)) {
        this.__secondNumber = number2;
        this.__calc();
    }
}

Sumator.prototype.getfirstNumber = function () { // Публічний метод
    return this.__firstnumber;
};
Sumator.prototype.setfirstNumber = function (number) { // Публічний метод
    if (this.numberValid(number)) {
        this.__firstnumber = number;
        this.__calc();
    }
};
Sumator.prototype.getsecondNumber = function () { // Публічний метод
    return this.__secondNumber;
};
Sumator.prototype.setsecondNumber = function (number) { // Публічний метод
    if (this.numberValid(number)) {
        this.__secondNumber = number;
        this.__calc();
    }
};
Sumator.prototype.__calc = function () {
    this.result = this.__firstnumber + this.__secondNumber;
};
// Приватний метод
Sumator.prototype.numberValid = function (number1) {
    if (typeof (number1) === "number") {
        return true;
    } else {
        return false;
    }
};

var task1 = new Sumator(9, 4);
console.log(task1.result);
task1.setfirstNumber("2");
console.log(task1.result);
task1.setfirstNumber(12);
console.log(task1.result);
