//  Create a function that accepts two numbers and returns their sum.
// function sum(a,b) {
//     return a + b;
// }
// let num1 = Number(prompt("Enter a number"))
// let num2 = Number(prompt("Enter a number"))
// console.log(sum(num1 , num2))



// 60. Create a function that accepts a number and returns whether it is even or odd
// let num3 = Number(prompt("Enter a number"))

// evenOdd(num3)
// function evenOdd(a){
//     if(a %2 == 0){
//         console.log("Even");
//     }
//     else{
//         console.log("Odd")
//     }
// }

// 61. Create a function that accepts three numbers and returns the largest number.
// let num4 = Number(prompt("Enter a number"))
// let num5 = Number(prompt("Enter a number"))
// let num6 = Number(prompt("Enter a number"))

// GreatestNo(num4,num5,num6);

// function GreatestNo(a,b,c){
//     if (a > b && a > c){
//         console.log("Greatest No: " +a)
//     }
//     else if (a < b && b > c){
//         console.log("Greatest No: " +a)
//     }
//     else{
//         console.log("Greatest No: " +c)
//     }
// }

// 62. Create a function that calculates the factorial of a number.


// function fact(n) {
//     let res = 1;
//     for (let i = 1; i <= n; i++) {
//         res *= i;
//     }
//     return res;
// }

// let num4 = Number(prompt("Enter a number"))
// console.log(fact(num4));

// 63. Create a function that reverses a string.
// function reverseString(orignal) {
//     let reverse = "";
//     for(i = orignal.length - 1; i >= 0; i--){
//         reverse += orignal[i]
//     }
//     console.log(reverse)
// }
// let str = prompt("Enter a String")
// console.log(orignal(str))


// 64. Create a function that checks whether a number is prime.
// function prime(num) {
//     for(i = 0; i < num; i++){
//         if(num % i == 0){
//             console.log("Not a prime")
//             break;
//         }
//         else{console.log("Prime")}
//     }
// }
// let num7 = Number(prompt("Enetr a No"))
// console.log(prime(num7))


// 65. Create a function that checks whether a string is a palindrome.
// function Palindrome(orignal) {
//     let reverse = "";
//     for(i = orignal.length - 1; i >= 0; i--){
//         reverse += orignal[i]
//     }
//     if(reverse === orignal){
//         console.log("Palindrome")
//     }
//     else{console.log("Not a Palindrome")}
// }
// let str = prompt("Enter a String")
// console.log(Palindrome(str))


// 66. Create a function called calculate() that accepts two numbers and an operator (+, -, *, /) and returns the calculated result.
// function add(num1, num2) {
//     return num1 + num2
// }
// function sub(num1, num2) {
//     return num1 - num2
// }
// function prod(num1, num2) {
//     return num1 * num2
// }
// function divide(num1, num2) {
//     return num1 / num2
// }

// let number1 = Number(prompt("Enter a number"))
// let number2 = Number(prompt("Enter a number"))
// let choice = Number(prompt("Enter a Choice"))

// switch (choice) {
//    case 1: {
//         console.log(add(number1, number2)) 
//         break;
//     }
//     case 2: {
//         console.log(sub(number1, number2))
//         break;
//     }
//     case 3: {
//         console.log(prod(number1, number2))
//         break;
//     }
//     case 4: {
//         console.log(divide(number1, number2))
//         break;
//     }
//     default:
//         console.log("Invalid Choice!")
//         break;
// }