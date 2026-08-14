// Default fuction is used  {Hoisting will work because it is FUNCTION DECLARATION}
let res = add(10,80);
function add(a,b) {
   return a+b;
}
console.log(res)

// Arrow Function {Hoisting will give error because it is FUNCTION EXPRESSION}
const multiply = (a,b) => a*b;
let ans = multiply(70,10);
console.log(ans);