//Task1
"use strict";
/*create() , яка приймає один аргумент у вигляді рядка. Ця функція повертає анонімну функцію, яка перевіряє чи
 переданий в неї аргумент збігається з аргументом зовнішньої функції.
Наприклад:
 tom = create("pass_for_Tom")
 tom("pass_for_Tom") повертає true
 tom("pass_for_tom")

*/
function create(str){
    let str1=str;
    return function (str){
        return (str === str1);
    }

}
let tom = create("pass_for_Tom");
console.log(tom("pass_for_Tom"));
console.log(tom("pass_for_tom"));


