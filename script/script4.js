//Task1
"use strict";

/*
Напишіть функцію mul(), яка приймає будь-яку кількість параметрів різного типу та повертає добуток параметрів типу Number.
Якщо параметри Number відсутні, повертає число 0.
 */
function mul (x,y){
    let result=1;
    for(let i=0; i<arguments.length; i++){
        if(!isNaN(arguments[i])){
            result *=  arguments[i];
        }
    }
    return result;
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0
