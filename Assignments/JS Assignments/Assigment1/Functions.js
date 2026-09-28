// 39. Write a function that accepts two numbers and returns their sum.
function sum(a,b){
    
    return a +b
}
num1 = 10;
num2 = 20;
console.log(sum(num1,num2))

// 40. Write a function that checks whether a number is even or odd.
let number =10
function checkEvenOdd(num){
    if(num%2 == 0){
        return "EvenNumber"
    }
    else{
        return "OddNumber"
    }
}
console.log(checkEvenOdd(number))

// 41. Write a function that accepts an array and returns the largest number.
let arr = [5,5,6,8,4]
function LargestFromArr(num){
    return num.reduce((largest,smallest)=>{
        return largest > smallest ? largest : smallest
    })
}
console.log(LargestFromArr(arr))

// 42. Write a function that accepts an array and returns only even numbers.
function ArrEven(num) {
    return num.filter(even => even %2 == 0)
}
console.log(ArrEven(arr))
// 43. Convert a normal function into an arrow function.
let arrowFunction = (a,b) => {
    return a + b
}
console.log(arrowFunction(num1,num2))

// 44. Write a function that accepts another function as an argument.
function function1(a,b,AddFunction) {
    return AddFunction(a,b)
}
function AddFunction(a,b){
    return a +b;
}
console.log(function1(num1,num2,AddFunction))

// 45. Write a function that returns another function.
function NumberCheck(num) {
    if(num %2 ==0){
        function Even() {
        return "Even Number"
    }
    }
    else{
        function Odd() {
        return "Odd Number"
    }
    }
    return 
}
console.log(NumberCheck(10))

// 46. Explain and practice the difference between:
// function add(a, b) {
//  return a + b;
// }
// and:
// const add = (a, b) => a + b;

// 47. Create a function that uses default parameters.
function greet(name){
    return ("Hello " + name)
}
console.log(greet("Deven"))
// 48. Create a function using the rest parameter:
let arr1= [2,3,5,7,9]

function sumArr(...numbers) {
        return numbers.reduce((curr,number)=> curr + number,0)
}
console.log(sumArr(...arr1))
// Make it return the total of all numbers.
