// 31. Print numbers from 1 to 10 using a for loop.

for (let i = 1; i <= 10; i++) {
    console.log(i);
    
}
// 32. Print numbers from 10 to 1.
for (let i = 10; i > 0; i--) {
    console.log(i);
    
}
// 33. Print all even numbers from 1 to 100.
for (let i = 0; i <= 100; i++) {
    if(i % 2 == 0){
        console.log(i);
    }
    
}
// 34. Print all odd numbers from 1 to 100.
for (let i = 0; i <= 100; i++) {
    if(i % 2 == 1){
        console.log(i);
    }
    
}
// 35. Print the multiplication table of a given number.
let num = 19
for (let i = 1; i < 10; i++) {
        console.log(num * i);
}
// 36. Find the sum of numbers from 1 to 100.
let sum = 0;
for (let i = 0; i <= 100; i++) {
   sum += i;
}
console.log(sum);
// 37. Find the factorial of a number.
let num1 = 5;
let fact = 0
for (let i = num1; i >= 1; i--) {
    fact *= i
}
console.log(fact)

// 38. Count how many digits are in a number.
let num2 = 67908;
    let count = 0;
    while (num2 !== 0) {
        num2 = Math.floor(num2 / 10);
        count++;
    }
    console.log(count)

// 39. Reverse a number.
let num3 = 67908;
let reverse = 0; 
while (num3 !== 0) {
    let lastDigit = num3 % 10;       
    reverse = (reverse * 10) + lastDigit; 
    num3 = Math.floor(num3 / 10);       
}

console.log(reverse); 

// 40. Find the sum of the digits of a number.
let sum1 = 0
while(num1 !== 0){
    let digit = num3 % 10;
    sum += digit;
    num1 = Math.floor(num3 /10);
}
console.log(sum)

// 41. Check whether a number is a palindrome.
let pnum1 = 121
let temp = 1;
while(pnum1 !== 0){

    let last = pnum1 % 10;
    temp += (temp * 10) + last;
    pnum1 = Math.floor(pnum1 /10);
}
if(temp == pnum1){
    console.log("Palindrome")
}
else{console.log("Not a palindrome")}

// 42. Print all numbers between 1 and 100 that are divisible by 3.
for (let i = 1; i <= 100; i++) {
    if(i % 3 == 0){
        console.log(i);
    }
    
}
// 43. Print the first 10 multiples of a number.
for (let i = 0; i <= 100; i++) {
    if(i % 10 == 0){
        console.log(i);
    }
    
}
// 44. Print this pattern:
