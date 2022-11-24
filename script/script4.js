//Task1
"use strict";
/*
Task 1.
Створіть тип об'єктів Геометрична фігура, визначте в ньому приватні властивості для встановлення центру фігури.
 Для доступу до цих властивостей визначте необхідний метод/методи.
На основі цього типу створіть два нових типи (спадкоємці) - Прямокутник і Коло. У цих типах визначте особливі приватні
характеристики. (Наприклад, довжина діагоналі для Прямокутника та радіус для Круга). До кожного з типів додайте
публічний метод info(), який виводить на екран всю доступну інформацію про фігуру.
 */

function Figure(x,y){
    this.__x = x;
    this.__y = y;
}
Figure.prototype.getX = function () {
    return this.__x;
};
Figure.prototype.setX = function (x) {
    this.__x = x;
};
Figure.prototype.getY = function () {
    return this.__y;
};
Figure.prototype.setY = function (y) {
    this.__y = y;
};
Figure.prototype.display = function () {
    console.log(this.__x + " " + this.__y);
};

function Rectangle(x, y, a, b) {
    Figure.call(this, x,y);
    this.__a = a;
    this.__b = b;
}
// Наслідування прототипу батьківського типа
Rectangle.prototype = Object.create(Rectangle.prototype);
// Відновлення посилання на constructor
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.getA = function(){
    return this.__a;
};
Rectangle.prototype.setA = function( a ){
    this.__a = a;
};
Rectangle.prototype.getB = function(){
    return this.__b;
};
Rectangle.prototype.setB = function( b ){
    this.__b = b;
};
Rectangle.prototype.display = function( ){
    console.log("Rectangle in the center of "+ this.__x + " " + this.__y
    + " The lenth of the sides are "+ this.__a + " " + this.__b );
};

function Circle(x, y, r) {
    Figure.call(this, x,y);
    this.__r = r;
}
Circle.prototype = Object.create(Figure.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.getR = function(){
    return this.__r;
};
Circle.prototype.setR = function( r ){
    this.__r = r;
};
Circle.prototype.display = function( ){
    console.log("Circle in the center of "+ this.__x + " " + this.__y
        + " The lenth of the radius is "+ this.__r);
};
var fig = new Figure(12,14);
fig.display();
var reg = new Rectangle(12, 4 , 2, 8);
reg.display();
var circ = new Circle(3, 5 , 2.5);
circ.display();
/*
Task 2.
Поліморфізм
Створіть тип об'єктів Квадрат, визначте захищену властивість для збереження значення сторони. Для доступу до цієї
властивості визначте необхідний метод/методи. Визначте також публічний метод, який повертає периметр.
На основі цього типу створіть тип Куб та перевизначте метод отримання периметра.
Реалізуйте 2 версії поточного завдання, використовуючи такі способи перевизначення:
1. Без розширення (повністю перевизначити метод батьківського типу);
2. З розширенням (використовувати результат методу
батьківського типу  для подальших розрахунків).
 */
function Square(a){
    this.__a = a;
}
Square.prototype.getA = function () {
    return this.__a;
};
Square.prototype.setA = function (a) {
    this.__a = a;
};
Square.prototype.perimeter = function () {
    return this.__a*4;
};
function Cube(a) {
    Square.call(this, a);
}
Cube.prototype = Object.create(Square.prototype);
Cube.prototype.constructor = Cube;
/*Cube.prototype.perimeter = function(){       rewriting method
    return this.__a*4*3;
};*/
Cube.prototype.per = function (){
    return this.perimeter()*3;
}

var cube = new Cube(12);
//console.log(cube.perimeter());
console.log(cube.per());
