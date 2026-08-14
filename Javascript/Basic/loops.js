// for(let x = 5; x > 0; x--){
//     console.log("Hello")
// }

// let num = 19;

// for(let mult = 0; mult <= 10; mult++){
//     let ans = num * mult
//     console.log(num +' * ' +mult +' = ' +ans )
//     // console.log(`${num} * ${mult} = ${ans}`)
// }





let even = 0; 
let odd = 0;
let nulll = 0;

for (let num = 5; num > 0; num--) {
  let hello = prompt("Enter a number");

  if(num == String){
    nulll++;
  }

  else{
let a = Number(hello); 


    if (a % 2 == 0) { 
        console.log(a + ": Even"); 
        even++; 
    } else { 
        console.log(a + ": Odd"); 
        odd++; 
    } 
} 
}
console.log("You have " + even + " Even number");
console.log("You have " + odd + " Odd number");
console.log("You have " + nulll + " Null number");