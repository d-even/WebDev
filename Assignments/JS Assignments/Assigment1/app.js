import { add, subtract, multiply, divide } from "./ImportExport.js";
console.log("Addition:", add(10, 5));
console.log("Subtraction:", subtract(10, 5));
console.log("Multiplication:", multiply(10, 5));
console.log("Division:", divide(10, 5));

import { calculateArea } from "./ImportExport.js";
let radius = 5;
let area = calculateArea(radius);
console.log(`Area of circle: ${area}`);


import { studentName, age, course, marks } from "./ImportExport.js";
console.log(`Name: ${studentName}`);
console.log(`Age: ${age}`);
console.log(`Course: ${course}`);
console.log(`Marks: ${marks}`);

import welcomeMessage from "./ImportExport.js";
console.log(welcomeMessage("Rahul"));

import { register, login, logout } from "./ImportExport.js";
console.log(register("Rahul"));
console.log(login("Rahul"));
console.log(logout("Rahul"));

import {addProduct,removeProduct,calculateTotal} from "./ImportExport.js";
console.log(addProduct("Laptop", 50000));
console.log(addProduct("Mobile", 20000));
console.log(addProduct("Headphones", 2000));
console.log(calculateTotal());
console.log(removeProduct("Mobile"));
console.log(calculateTotal());