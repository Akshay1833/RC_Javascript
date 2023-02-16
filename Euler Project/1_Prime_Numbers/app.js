// let num = parseInt(prompt("Enter a number"))
// console.log(num)
sum1 = 0;
sum2 = 0;

let num1 = 10/3;
console.log(parseInt(num1))

let num2 = 10/5;
console.log(parseInt(num2))

//print multiples of 3
for (let i = 1; i < num1; i++) {
    //document.write(3*i);
    var sum1 = sum1 + 3*i;
    
}

//print multiples of 5
for (let i=1; i < num2; i++) {
    //document.write(5*i)
    var sum2 = sum2 + 5*i
}
document.write(sum1);
document.write("<br>");
document.write(sum2);
document.write("<br>");
document.write(sum1 + sum2);





