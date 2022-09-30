var x = 1;
var y = 2;
var res1 = x.toString()+y.toString() ; // Допишіть код, необхідно використовувати змінні x та y
console.log(res1); // "12"
console.log(typeof res1); // "string"

var res2 = (x==x).toString()+y.toString() ; // Допишіть код, необхідно використовувати змінні x та y
console.log(res2); // "true2"
console.log(typeof res2); // "string"

var res3 = (x!=y); // Допишіть код, необхідно використовувати змінні x та y
console.log(res3); // true
console.log(typeof res3); // "boolean"

var res4 = x.NaN+y; // Допишіть код, необхідно використовувати змінні x та y
console.log(res4); // NaN
console.log(typeof res4); // "number"

