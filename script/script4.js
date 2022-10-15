//Task1
"use strict";

function calc(x, y) {

    var arr = [];
    arr[0] = 2 * (x + y);
    arr[1] = x * y;

    function output() {
        console.log("The numbers are " + x + " and " + y +
            " perimetr is " + arr[0] + " the area is " + arr[1]);
    }

    return output;
}

var func = calc(5, 7);
func();

//Task2
var i = -1;

function createArrayIterator(array) {
    function returnarr() {
        i++;
        return arr[i];
    }

    return returnarr;

}

var arr = [5, 3, 7];
var itr = createArrayIterator(arr);
console.log(itr()); // 5
console.log(itr()); // 3
console.log(itr()); // 7
console.log(itr()); // undefined

//Task3
var arr1 = [];

for (var i = 0; i <= 2; i++) {
    var inner = function () {
        var index = i;
        return function () {
            console.log(index);
        };
    };
    arr1[i] = inner();
}
arr1[0](); // 0
arr1[arr1.length - 1](); // 2
