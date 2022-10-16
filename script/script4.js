//Task1
"use strict";
/*Напишіть рекурсивну функцію digitSum(k), яка знаходить суму цифр цілого числа k  без використання циклів.
*/
var sum = 0;
var k = 121;

function digitSum(k) {
    if(k!=0) {
        var dob = k % 10;
        k = k - dob;
        k = k / 10;
        sum = sum + dob;
        return digitSum(Math.ceil(k));
    }
    return 0;
}

digitSum(k);
console.log(Math.ceil(sum));


