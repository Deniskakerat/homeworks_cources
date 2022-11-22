//Task1
"use strict";
/*
Task 1.
Дано наступний код (файл task1.js):
Прив'яжіть функцію format() до об'єкта user.
Реалізуйте 2 версії поточного завдання за допомогою:
1. Анонімну функцію обгортку;
2. Метод bind().
 */

var user = {
    name: "Tom",
    print: function (beginMsg, endMsg) {
        console.log(beginMsg + " " + this.name + " " + endMsg);
    }
};
function tomFormat(func) {
    func();
};
tomFormat(function () {
    user.print("<<<", ">>>");
});

var tomFormat1 = user.print.bind(user ,"<<<", ">>>");
tomFormat(tomFormat1);
/*Task 2.
Дано наступний  код (файл task2.js):
Використовуючи функцію mul() і каринг створіть дві функції doubleMul() і qadraMul(), які множать числа на 2 і 4 відповідно.
 */
function mul(a, b) {
    return a * b;
}

var doubleMul = mul.bind(null,2)
var qudraMul = mul.bind(null,4)
    console.log(doubleMul(5)); // 10
console.log(qudraMul(5)); // 20
/*
Task 3.
Використовуючи код із файлу (файл task3.js) Напишіть аналог методу bind().
 */

function bind(func,context) {
    return function() {
        return func.apply(context);
    };
};
function func() {
    console.log(this.name + " - " + this.age + " " + this.surname);
}
var user = {
    name: "Tom",
    age: 20,
    surname:"Redy"
};
var f = bind(func, user);
f();
