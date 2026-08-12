// // Area of Circle
// let radius = 2;
// console.log(2 * 22/7 * radius**2)

// //Amout from Gst

// let totalAmount = 118
// let  gst = totalAmount / (1+(18/100));
// console.log(gst)

// // C to F
// let C = 100
// let F =(C * 9/5) + 32
// console.log(F)


// let marks = 500;
// let total = 1000;

// let per = marks *100 /total

// if(per > 90){
//   console.log("Grade is A")
// }
// else if(per > 70){
//   console.log("Grade is B")
// }
// else if(per >= 50){
//   console.log("Grade is C")
// }
// else{
//   console.log("D")
// }

// console.log(true&&(!false || false) && true)



let meet = prompt("Meet chance")
let shreya = prompt("Shreya chance")

if(meet === shreya){
  alert("Tie")
  
}
else if((meet == 'rock' && (shreya =='scissor' || 'lizard')) && (meet =='paper'&& (shreya == 'rock' || 'spock')) && ( meet =='scissor' && (shreya == 'paper' || 'lizard')) && (meet == 'lizard' && (shreya =='paper' || 'spock')) && (meet == 'rock' && (shreya =='scissor' || 'rock')) ){
  alert("Meet Win")
}
else{
  alert("Shreya Win")
}
