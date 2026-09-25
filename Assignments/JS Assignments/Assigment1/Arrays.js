let arr = [1,2,3,7,4,5,5];
let sum = 0
arr.forEach( a =>{
    sum += a
})
console.log(sum)

// 1. Create an array of 5 numbers and find the sum of all numbers.

// 2. Find the largest number in an array without using Math.max().

let max = 0;
for (let i = 0; i < arr.length; i++) {
    if(arr[i] > max){
        max = arr[i]
    }
}
console.log(max)

// 3. Find the smallest number in an array.
let min = 0;
for (let i = 0; i < arr.length; i++) {
    if(arr[i] < min){
        min = arr[i]
    }
}
console.log(min)
// 4. Reverse an array without using reverse().
let revArr = []
revArr = arr.reverse()
console.log(revArr)

// 5. Remove duplicate values from an array.
let removeDuplicate = []
for(i = 0; i < arr.length; i++){
    if(!removeDuplicate.includes(arr[i])){
        removeDuplicate.push(arr[i])
    }
}
console.log(removeDuplicate)
// 6. Count how many times a particular value appears in an array.
// 7. Given [1, 2, 3, 4, 5], create a new array containing only even numbers.
let evenArr = [];
for(i = 0;i <arr.length;i++){
    if(arr[i] % 2 == 0){
        evenArr.push(arr[i])
    }
}
console.log(evenArr)
// 8. Given an array of numbers, create a new array where every number is multiplied by 2.
let mult2Arr = [];
for(i = 0;i <arr.length;i++){
    mult2Arr[i] = arr[i] *2
}
console.log(mult2Arr)
// 9. Find the first number greater than 50 using find().
let nums= [627,51,699]
let firstNum = nums.find(num => num > 50)
console.log(firstNum)
// 10. Check whether an array contains a particular value using includes().

// 11. Sort an array of numbers from smallest to largest.
for(i = 0; i< arr.length; i++){
    for(j = 0; j< arr.length -1 ; j++){
    if(arr[j] > arr[j +1]){
        let temp = arr[j];       
arr[j] = arr[j + 1]; 
arr[j + 1] = temp;  
    }
    }
}console.log(arr)
// 12. Combine two arrays and remove duplicate values.
let arr1 = [1,23,4,5]
let arr2 = [3,4,2,9]
let CombineArr = []
for(i = 0 ; i < arr1.length; i++){
    CombineArr.push(arr1[i])
}
for(i = 0; i < arr2.length; i++){
    if (!CombineArr.includes(arr2[i])) {
        CombineArr.push(arr2[i])
    }
}
console.log(CombineArr)
// 13. Find the difference between two arrays.
let Diff =[];
let one = 1;
let zero = 0;

for (let i = 0; i < arr1.length; i++) {
    for(let j = 0; j < arr2.length; j++){
        if(arr[i] === arr[j]){
            Diff.push(zero)
        }
        else{
            Diff.push(one)
        }
    }
}
console.log(Diff)
// 14. Convert an array of strings into uppercase strings using map().
str = ['s','d','d']
let Hello =[]
for( i = 0; i < str.length;i++){
    Hello = str.map(char => char.toUpperCase())
}
console.log(Hello)

// 15. Given an array of products, calculate the total price using reduce(). 
const products = [
{ name: "Laptop", price: 50000 },
 { name: "Mouse", price: 1000 },
 { name: "Keyboard", price: 2000 }
];

let total = products.reduce((a,b) =>{
    return a + b.price;
}, 0)
console.log(total)