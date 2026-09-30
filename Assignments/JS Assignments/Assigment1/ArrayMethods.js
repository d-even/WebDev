let arr = [4,5,6,7,8,9,9]
// 16. Explain and practice the difference between map() and forEach() with an example.

//  Map is to return direct array
let arr1 = arr.map(a => a + 10)
console.log(arr1)

// ForEach: return value nessecary mostly use to perform one number
let arr2 = arr.forEach(num => {
    console.log(num + 10)
});

// 17. Given an array of users, use filter() to find users whose age is greater than 18.
let users = [
    {id: 1, name: "Deven", age:18, role:"member"},
    {id:2, name: "Tanmay", age:8,role:"member"},
    {id:3, name: "Tanmay", age:28, role:"admin"}
]

let adults = users.filter(user => user.age > 18);
console.log(adults)

// 18. Use find() to find a user whose id is 3.
let person = users.find(user => user.id === 3)
console.log(person)
// 19. Use some() to check whether at least one user is an admin.
let FindAdmin = users.some(user => user.role === "admin")
console.log(FindAdmin)
// 20. Use every() to check whether all users are adults.
let CheckAdmin = users.every(user => user.role === "admin")
console.log(CheckAdmin)
// 21. Use reduce() to count how many times each number appears.
let arr12 = [4,6,7,5,7,9,5]
let CountNo = arr12.reduce((check, num)=>{
    check[num] = (check[num] || 0) + 1;

    return check;
}, {})
console.log(CountNo)

// 22. Convert:
const fruits1 = ["apple", "banana", "apple", "orange", "banana", "apple"];

const count = fruits1.reduce((curr, fruit) => {
  curr[fruit] = (curr[fruit] || 0) + 1;
  return curr;
}, {});

console.log(count);
// Output: { apple: 3, banana: 2, orange: 1 }


// 23. Given an array of objects, sort the objects by their price.
const products = [
{ name: "Laptop", price: 50000 },
 { name: "Mouse", price: 1000 },
 { name: "Keyboard", price: 2000 }
];
 let SortByPrice = products.sort((a,b) => a.price - b.price )
 console.log(SortByPrice)
// 24. Given an array of users, sort them alphabetically by their name.
let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
let Order = fruits.sort((a,b) => a.localeCompare(b))
console.log(Order)

// 25. Chain filter(), map(), and reduce() together to calculate the total price of only products that cost more than
// 1000

const products1 = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 },
    { name: "Monitor", price: 12000 },
    { name: "Keyboard", price: 1500 },
    { name: "able", price: 300  }
];

let totalPrice = products1
                          .filter(item => item.price > 1000)
                          .map(item => item.price)
                          .reduce((sum,price) => sum + price ,0 )

console.log(totalPrice)