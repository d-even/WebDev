let num1 = prompt("Enter a first Number")
let num2 = prompt("Enter a second Number ")
let num3 = prompt("Enter a third Number ")

// 16. Write a program to check whether a number is positive, negative, or zero.
if(num1 > 0){
    console.log("Positive Number Detected: " +num1)
}
else if(num1 < 0){
    console.log("Negative Number Detected: " +num1)
}
else{
    console.log("The Number is zero")
}

// 17. Check whether a number is even or odd.
if(num1 %2 == 0){
    console.log("Even Number Detected: " +num1)
}
else{
    console.log("The Number is Odd")
}

// 18. Check whether a person is eligible to vote based on age.
if(num1 < 18){
    console.log("Eligible for vote")
}
else{
    console.log("Not Eligible for vote")
}

// 19. Find the largest of two numbers.
if(num1 > num2){
    console.log(+num1 +" is greater than " +num2)
}
else{
    console.log(+num2 +" is greater than " +num1)
}

// 20. Find the largest of three numbers.
if(num1 > num2 && num1 > num3 ){
    console.log(+num1 +" is greater than " +num2 +" and " +num3)
}
if(num3 > num1 && num3 > num2 ){
    console.log(+num3 +" is greater than " +num1 +" and " +num3)
}
else{
    console.log(+num2 +" is greater than " +num1 +" and " +num3)
}


// 21. Check whether a given year is a leap year.
let year = prompt("Enter a year")
if(year % 4 == 0){
    console.log("Leap year detected")
}
else{
    console.log("Not a leap")
}


// 22. Check whether a person has passed or failed based on marks.
let marks = prompt("Enter Marks")
let total = prompt("Enter total marks")
let percentage = marks * 100 / total
if(percentage >= 35){
    console.log("Passed")
}
else{
    console.log("Sorry Failed")
}
// 23. Create a grading system:
// • 90–100 → A
// • 80–89 → B
// • 70–79 → C
// • 60–69 → D
// • Below 60 → F
if(percentage >= 90){
    console.log("Grade A")
}
else if(percentage >= 80 && percentage <= 89){
    console.log("Grade B")
}
else if(percentage >= 70 && percentage <= 79){
    console.log("Grade C")
}
else if(percentage >= 60 && percentage <= 69){
    console.log("Grade D")
}
else{
    console.log("Sorry Failed")
}

// 24. Check whether a character is a vowel or consonant
let char = prompt("Enter a Character: ")
if(char = 'a' || 'e' || 'i' || 'o' || 'u' ){
    console.log("Its a vowel")
}
else{
    console.log("Consonent")
}


// 25. Check whether a number is divisible by both 3 and 5.
if(num1 % 3 == 0 && num1 % 5 ==0){
    console.log("It is divisible by 3 and 5")
}
else{
    console.log("It is not divisible by 3 and 5")
}

// 26. Create a simple calculator using if/else or switch.
let choice = prompt("Enter choice for calculator")
switch (choice) {
    case 1:{
        console.log("Addition: "+(num1 + num2))
        break;
    }
    case 2:{
        console.log("Substraction: "+(num1 - num2))
        break;
    }
    case 3:{
        console.log("Multiply: "+(num1 * num2))
        break;
    }
    case 4:{
        console.log("Division: "+(num1 / num2))
        break;
    }

    default:
        break;
}
// 27. Check whether three sides can form a valid triangle.
let a = prompt("Enter first side of traingle")
let b = prompt("Enter 2 side of traingle")
let c = prompt("Enter 3 side of traingle")
if((a + b > c) && (a + c > b) && (b + c > a)){
    console.log("It is Traingle")
}
else{
    console.log("It is not a Traingle")
}

// 28. Determine whether a number is a single-digit, double-digit, or triple-digit number.
if(num1 < 10){
    console.log("Single digit")
}
else if(num1 >= 10 && num1 < 100){
    console.log("Double digit")
}

else{
    console.log("Three digit Number")
}
// 29. Check whether a person is eligible for a driving license based on age.
if(num1 < 18){
    console.log("You are eligible for vote")
}
else{console.log("you cant vote")}


// 30. Create a program that determines whether a given temperature is cold, normal, or hot.
if(num1 > 100){
    console.log("HOT")
}
if(num1 < 0){
    console.log("COLD")
}
else{console.log("NORMAL")}

