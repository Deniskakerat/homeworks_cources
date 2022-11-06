//Task1
"use strict";

/*
Task 2.
Напишіть функцію, яка приймає як параметр об'єкт salaries із зарплатами та повертає значення максимальної із зарплат.
Код має працювати з різною кількістю зарплат в об'єкті.
Приклади salaries у файлі task2.js
 */
var salaries1 = {
    John: 100,
    Bill: 300,
    Mike: 250,
};

var salaries2 = {
    Cris: 150,
    Brain: 600,
    John: 300,
    Steve: 400,
    Bill: 50,
};

function count(obj) {
    let max = 0;
    for (let key in obj) {
        if (max <= obj[key]) {
            max = obj[key];
        }
    }
    return max;
}

console.log(count(salaries1));
console.log(count(salaries2));

