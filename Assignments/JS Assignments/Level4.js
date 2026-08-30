let message = "deven Hello"

// 6. Find the length of a string without using length if possible.
const text = "Hello, World!";
let count3 = 0;

for (i = 0; i < message.length - 1; i++) {
    count3++;
}

console.log(count3);  


// 47. Convert a string to uppercase.

message = message.toUpperCase();
console.log(message)
// 48. Convert a string to lowercase.
message = message.toLowerCase();
console.log(message)
// 49. Reverse a string.
let reverse = ""
for (let i = message.length - 1; i >= 0; i--) {
    reverse += message[i];
}
console.log(reverse)

// 50. Check whether a string is a palindrome.
let reverse1 = ""
for (let i = message.length - 1; i >= 0; i--) {
    reverse += message[i]
}
if (reverse1 === message) {
    console.log("Palindrome")
}
else{console.log("Not a palindrome")}

// 51. Count the number of vowels in a string.
let vowel = "aeiouAEIOU";
let count = 0
for (let i = 0; i < message.length; i++) {
    let char = message[i];

    if(vowel.includes(char)){
        count++
    }
    
}
console.log(count)
// 52. Count the number of spaces in a string.
let space = " ";
let count1 = 0
for (let i = 0; i < message.length; i++) {
    let char1 = message[i];
    if(space.includes(char1)){
        count1++
    }
}
console.log(count1)

// 53. Count how many times a particular character appears in a string.
let character = 'e'
let count2 = 0;
for (let i = 0; i < message.length - 1; i++) {
    if(character === message[i]){
        count2++
    }
    
}
console.log(count2)

// 54. Find the first character of a string.
console.log(message[0])
// 55. Find the last character of a string.
console.log(message[message.length -1])
// 56. Remove all spaces from a string.
let result = "";
for(i = 0; i < message.length - 1; i++){
    if(message !== " "){
        result += message[i]
    }
}
console.log(result)

// 57. Capitalize the first letter of a string.
mess = message[0].toUpperCase() + message.slice(1);
console.log(mess)

// 58. Check whether a string contains a particular word.
let word = 'z'
let contain = false
for(i = 0; i< message.length -1 ; i++){
    if(word === message[i]){
        contain = true
    }
}
console.log(contain)