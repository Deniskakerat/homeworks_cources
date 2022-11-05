//Task1
"use strict";
/*
Завдання No1.
1. Створіть новий об'єкт користувача;
2. Додайте властивість name із значенням Cris;
3. Додайте властивість surname зі значенням Simons;
4. Змініть значення name на Brain;
5. Видаліть властивість name з об'єкта;
 */
let user = {
    name: "Chris",
    surname: "Simons",
}
let a = user;
console.log(a.name);
delete a.name;
console.log(a);
//Task2
/*
Завдання No2.
1. Створіть новий об'єкт car;
2. Додайте властивість model з будь-яким значенням;
3. Додайте властивість speed з будь-яким значенням;
4. Додати метод run(), який виводить повідомлення: "model їде зі швидкістю
speed";
5. Додайте метод stop(), який виводить повідомлення: "model зупинилася";
Реалізуйте 3 версії завдання, використовуючи наступні синтаксиси створення
об'єктів:
1. Стандартний;
2. Масивів;
3. Спрощений.
 */
//Short
let car = {
    model: "BMW",
    speed: 120,
    run: function () {
        console.log("The car " + this.model + " going at speed " + this.speed);
    },
    stop: function () {
        console.log("The model " + this.model + " is stopped");
    }
}
car.run();
car.stop();
//Normal
let car1 = new Object();
car1.model = "lada";
car1.speed = 90;
car1.run = function () {
    console.log("The car " + this.model + " going at speed " + this.speed);
}
car1.stop = function () {
    console.log("The model " + this.model + " is stopped");
}
car1.run();
car1.stop();
//Array method
var car3 = {};
car3["model"] = "Mitsubishi";
car3["speed"] = 150;
car3["run"] = function () {
    console.log("The car " + car3.model + " going at speed " + car3.speed);
};
car3["stop"] = function () {
    console.log("The model " + car3.model + " is stopped");
};

car3["run"]();
car3["stop"]();
//Task3
/*
1. Створіть новий об'єкт tv;
2. Додайте властивість currentChannel зі значенням 1;
3. Додайте метод nextChannel(), який збільшує currentChannel на одиницю;
4. Додайте метод previousChannel(), який зменшує поточний Channel на
одиницю;
5. Додати метод setChannel(number), який переходить на канал за номером.
 */
let tv = {
    currentChannel: 1,
    nextChannel : function (){
        ++this.currentChannel;
    },
    previousChannel : function (){
        --this.currentChannel;
    },
    setChannel : function (number){
        this.currentChannel = number;
    },
    print : function (){
        console.log("The current channel is " + this.currentChannel);
    }

}
tv.nextChannel();
tv.print();
tv.previousChannel();
tv.print()
tv.setChannel(12);
tv.print();

//Task5
/*
Завдання No4.
Опишіть таку інформацію у вигляді ієрархії масивів та об'єктів:
 */

var salaries = {
    John: 100,
    Bill: 300,
    Mike: 250
};

var Kids = {
    John : {
        name:"John",
        age: 28,
        experience:1,
        language : [
            "Java","JavaScript","SQL"
        ]},
    Bill : {
        name:"Bill",
        age: 30,
        experience:5,
        language : [
            "HTML","CSS","javaScript"
        ]},
    Mike : {
        name:"Mike",
        age: 32,
        experience:4,
        language : [
            "Python ","SQL"
        ]}
};
console.log(Kids.John.name + " " +Kids.John.age+ " "+Kids.John.experience +" "+ Kids.John.language)
console.log(Kids.Bill.name + " " +Kids.Bill.age+ " "+Kids.Bill.experience +" "+ Kids.Bill.language)
console.log(Kids.Mike.name + " " +Kids.Mike.age+ " "+Kids.Mike.experience +" "+ Kids.Mike.language)
//Task 6
/*
Створіть функцію isEmpty(obj), яка повертає true, якщо в об'єкті немає властивостей
та false – якщо хоч одна властивість є.
 */
let test_obj = {

}
let isEmpty = function (obj){
    let i=0;
    for (let key in obj) {
        return true;
    }
    return false;
}
console.log(isEmpty(test_obj));
console.log(isEmpty(Kids));
//Task 7
/*
Перебір властивостей та методів
Є об'єкт salaries з зарплатами. Напишіть код, який виведе середнє значення всіх
зарплат. Код має працювати з різною кількістю зарплат в об'єкті.
 */
var salaries = {
    John: 100,
    Bill: 300,
    Mike: 250
};
var salaries1 = {
    Cris: 150,
    Brain: 600,
    John: 300,
    Steve: 400,
    Bill: 50
};
let count = function(obj) {
    let result, number=0, sum=0;
    for (let key in obj) {
        sum = sum + obj[key];
        number++;
    }
    console.log(sum/number);
}
count(salaries);
count(salaries1);
