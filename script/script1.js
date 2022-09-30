//Task1
var x = 5;
if(x>0){
    x++;
}else if(x<0){
    x=x-2;
}else{
    x=10;
}
console.log(x);
//Task2
var a=3;
(a==0)?console.log("нульове число"):
    (a>0)?(a%2==0)?console.log("додатне парне"):console.log("додатне непарне"):
        (a%2==0)?console.log("від’ємне парне число"): console.log("від’ємне непарне число");
//Task3
var a=[2,2,7,2];
var chislo = a[0];
var s;
for(var i=1;i<a.length;i++){
    if(a[i]==chislo){
    }else{
        s=i;
    }
}
console.log(++s);
//Task4
var k=5;
var str ;
switch (k){
    case 1:str = "погано";break;
    case 2:str = "погано";break;
    case 3:str = "задовільно";break;
    case 4:str = "добре";break;
    case 5:str = "відмінно";break;
    default:str = "помилка";
}
console.log(str);
