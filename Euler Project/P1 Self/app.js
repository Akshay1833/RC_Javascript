// sum1 = 0
// sum2 = 0
// for (i=0; i<10; i++) {
//     num1 = 3*i;
//     if (num1 > 10) { break; }
//     document.write(num1)
//     sum1 = sum1 + num1
//     document.write("<br>")
// }

// document.write ("<br>")

// for (i=0; i<10; i++) {
//     num2 = 5*i
//     if (num2 > 10 || num2 == 10) {break;}
//     document.write(num2)
//     sum2 = sum2 + num2
//     document.write ("<br>")
// }

// document.write ("<br>")

// document.write(sum1 + sum2)


//find multiples of 3
sum_of_3=0
sum_of_5=0
for (i=0; i<10; i++) {
    let x = 3*i;
    if (x>10) {
        break
    }
    document.write(x, "<br>")
    sum_of_3 += x
    
}

document.write("<br>")

//find multiples of 5
for (i=0; i<10; i++) {
    let y = 5*i;
    if (y>=10) {
        break
    }
    document.write(y, "<br>")
    sum_of_5 += y
}

document.write("<br>")

document.write(sum_of_3, "+", sum_of_5, "=", sum_of_3+sum_of_5)