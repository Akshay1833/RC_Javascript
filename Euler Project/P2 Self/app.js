num1 = 0 //1 1 
num2 = 1
num3 = 0 //1 2

for (i=0; i<=10; i++) {
    /*num3 becomes sum of num1 + num2 = 
    num3 = 0+1 = 1
    num3 = 1+1 = 2
    */
    num3 = num1 + num2

    /*num1=0 = num2=1,
    num1 = 1
    num = 1
    */
    num1 = num2

    /*num2=1 = num3=1, so num2 = 1
    num2=1 = num3=2, so num2 = 2
    */
    num2 = num3
    
    document.write(num1)
    document.write("<br>")

}