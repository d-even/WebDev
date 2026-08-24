// console.log(Math.pow(5,2))

// console.log(Math.max(5,2))

// console.log(Math.floor(5.8922))

let x = prompt("Enter the No 1to 100")
let y = Math.round(Math.random() *100)


while(x !=y ){
    if(x > y){
        x = prompt("your No is Greater! Try again")
    }
    else{
        x = prompt("your No is Smaller! Try again")
    }
}

console.log("Correct number")
console.log(y)
