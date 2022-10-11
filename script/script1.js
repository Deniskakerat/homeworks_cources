//Task 1
function pow(x, n) {
    var s = 1;
    for (var i = 0; i < n; i++) {
        s = s * x;
    }
    return s;
}

console.log(pow(2, 4));

//Task 2
function minarg(arg = []) {
    var min = arg[0];
    for (var i = 1; i < arg.length; i++) {
        if (min >= arg[i]) {
            min = arg[i];
        }
    }
    return min;
}

console.log(minarg([9, 3, 4, 5, 6, 7, 12, 6, 14, 16]));

//Task 3
function sign(x) {
    return (x < 0) ? -1 : (x > 0) ? 1 : 0;
}

console.log(sign(12));

//Task 4
function calc(a, b, op) {
    return (op === 1) ? a - b : (op === 2) ? a * b : a / b;
}

console.log(calc(2, 3, 3));

//Task 5
function digitN(k, n) {
    var string = k.toString();
    return string[string.length-n];
}

console.log(digitN(120594,4))
