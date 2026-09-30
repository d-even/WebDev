// 26. Create a user object with name, age, email, and city properties.

let user = {
    name:"Deven",
    age: 21,
    email:"devensawant4554@gmail.com",
    city:"Mumbai"
}
// 27. Access an object's properties using both dot notation and bracket notation.
// Dot Notation
console.log(user.name)
console.log(user.age)
console.log(user.email)
console.log(user.city)

// Bracket Notation: It is used when we have to get property to call "BraketNotaionProperty"
let BraketNotaionProperty = "name"
console.log(user[BraketNotaionProperty])

// 28. Add a new property to an existing object.
user.phone = 8928877124
console.log(user)

// 29. Delete a property from an object.
delete user.age
console.log(user)

// 30. Check whether an object contains a particular property.
console.log(user.hasOwnProperty("email"))

// Mordern Method
console.log("name" in user)

// 31. Use Object.keys() to get all keys from an object.
console.log(Object.keys(user))
// 32. Use Object.values() to get all values from an object.
console.log(Object.values(user))
// 33. Use Object.entries() to convert an object into an array of key-value pairs.
console.log(Object.entries(user))
// 34. Given an object containing student marks, calculate the total marks.
const student = {
 math: 80,
 science: 75,
 english: 90
};

let totalMarks = Object.values(student)
                .reduce((sum,value)=> sum + value , 0)
console.log(totalMarks)

// 35. Find the subject with the highest marks.
let High = Object.entries(student)
            .reduce((curr,max) =>{
                return curr[1] > max[1] ? curr : max
            })
console.log(High)

// 36. Create a new object by changing the value of one property without modifying the original object.
const newObject ={
    ...student,
    english: 98
}
console.log(newObject)

// 37. Given an array of user objects, find the user with the highest age
let arr = [
    {name:"deven", age:20},
    {name:"tanmay", age:10},
    {name:"meet", age:23},
    {name:"suraj", age:24}
]
let highestAge = arr.reduce((curr, max)=>{
    return curr.age > max.age ? curr : max
})
console.log(highestAge)
// 38. Given:

// Access city safely using optional chaining (?.) if not there print undefined

const user1 = {
 name: "Rahul",
 address: {
 city: "Pune",
 state: "Maharashtra"
 }
};
console.log(user1?.address?.city)
