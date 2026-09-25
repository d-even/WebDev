

// let arr = [10,20,30,40,50,60]

// let mango = []

// arr.pop()

// arr.shift()
// arr.unshift(80)
//  console.log(arr)

// for (let i = 0; i < arr.length; i+=v) {
//     mango.push(arr[i]);
    
// }
// console.log(mango)

let arr = [10,40,78]
arr.forEach((i) => {
    if(i % 5 == 0){
        console.log(i)
    }
    
});



function addTheNo(num) {
for(let i = 0; i <= 10; i++){
   console.log(i + num)
}
}

let num = Number(prompt("Enter a Number "))

console.log(addTheNo(num))