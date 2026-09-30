//  Destructuring & Spread — Questions 49–56
// 49. Destructure name and age from a user object.
const user ={
    name: "Deven",
    age: 21
}
let {name, age} = user;

console.log(name)
console.log(age)

// 50. Rename a destructured property while destructuring.
let {name: Username, age: UserAge} = user;
console.log(Username)
console.log(UserAge)
// 51. Destructure the first and second values from an array.
let arr = [1,2,3,4,5,6,7]
let [a,b] = arr
console.log(a)
console.log(b)
// 52. Swap two variables using array destructuring.
let num1 = 10;
let num2 = 20;
[num1,num2] = [num2,num1]
console.log(num1)
console.log(num2)
// 53. Create a copy of an array using the spread operator.
let copy = [...arr]
console.log(copy)

// 54. Add a new item to an array without modifying the original array.
let AddItem = 32
let NewArr = [...arr]
NewArr.push(AddItem)
console.log(NewArr)

// 55. Create a copy of an object and change one property using the spread operator.
let fruits =["Amit","Deven","Tanmay"]
let newFruits = [...fruits,"Suraj"]
console.log(newFruits)

// 56. Given: Create a new object that changes only the city to "Pune" while keeping the original object unchanged.
const user1 = {me: "Amit",
 age: 25,
 city: "Mumbai"
};
const user2 = {...user1}

user2.city = "Pune"
console.log(user2)