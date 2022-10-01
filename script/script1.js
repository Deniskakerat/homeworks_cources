//Task 1

console.log("task1")
var a=16;
var b=4;
var number_of_vidrizok=0;
while(a>=b){
    a=a-b;
    number_of_vidrizok++;
}
console.log(number_of_vidrizok)

//Task 2
console.log("task2")
var n=1234;
while(n!=0){
    var chislo = n%10;
    console.log(chislo);
    n=(n-chislo)/10;
}
//Task 3
console.log("task3")
var a1 = 12;
var b1 = 18;
var sum=0;
for(var i=a1;i<b1;i++){
    sum=sum+i;
}
console.log(sum);
//Task 4
console.log("task4")
var numb = 8;
var fact=1;
for(var i=1;i<=numb;i++){
    fact=fact*i;
}
console.log(fact);
//Task 5.
console.log("task5")
var answ_array = [];
var promted;
var answ_sum=0;
do {
    i=0;
    promted = prompt("Enter i");
    answ_array[i]=Number(promted);
    answ_sum = answ_sum+answ_array[i];
    i++;
}while(promted!==" ");
console.log(answ_sum);
//Task 6.
console.log("task6")
var a2=12;
var b2=15;
for(var i=a2;i<=b2;i++){
    for(var j=0;j<=i-a2;j++){
        console.log(i);
    }
}
