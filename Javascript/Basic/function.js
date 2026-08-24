// // Default fuction is used  {Hoisting will work because it is FUNCTION DECLARATION}
// let res = add(10,80);
// function add(a,b) {
//    return a+b;
// }
// console.log(res)

// // Arrow Function {Hoisting will give error because it is FUNCTION EXPRESSION}
// const multiply = (a,b) => a*b;
// let ans = multiply(70,10);
// console.log(ans);





// Fuctions is a block of code which performs when it is called 


// Return is a keyword in jAvaScript which s used to store and retrive the value which is performed in function 
// function add() {
//    // let num1 = Number(prompt("Enter Number"))
//    // let num2 = Number(prompt("Enter Number"))
//    return 5 + 9
// }
// let ans = add()
// console.log(ans)





// function Hello(a,b,c = 0){
//    return a+b+c
// }
// let x = Hello(5,4,5 )
// console.log(x)





// let result = (a , b , c) => { return( a + b ) }

// let c = result(5,4)
// console.log(c)

// function add(...a) {
   
//    return a
// }
// console.log(add(2,3,4))



function game(player1, player2) {
   
if(player1 === player2){
  alert("Tie")
}
else if((player1 == 'rock' && (player2 =='scissor')) && (player1 =='paper'&& (player2 == 'rock')) && ( player1 =='scissor' && (player2 == 'paper')) ){
  alert("player1 Win")
}
else{
  alert("player2 Win")
}
}

let player1 = prompt("Enter Choice of player 1")
let player2 = prompt("Enter Choice of player 2")

let ans = game(player1,player2)

