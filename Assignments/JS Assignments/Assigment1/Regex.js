function validateName(name) {
    return /^[A-Za-z]+$/.test(name);
}

console.log(validateName("Rahul"));   // true
console.log(validateName("Rahul123")); // false
console.log(validateName("Rahul Kumar")); // false

function validateMobile(number) {
    return /^[6-9]\d{9}$/.test(number);
}

console.log(validateMobile("9876543210")); // true
console.log(validateMobile("1234567890")); // false
console.log(validateMobile("987654321"));  // false

function validateEmail(email) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

console.log(validateEmail("rahul@gmail.com")); // true
console.log(validateEmail("rahul123@yahoo.com")); // true
console.log(validateEmail("rahulgmail.com")); // false

function validatePassword(password) {
    return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
}

console.log(validatePassword("Rahul@123")); // true
console.log(validatePassword("rahul123"));  // false
console.log(validatePassword("RAHUL@123")); // false

let text = "My age is 22 and my mobile number is 9876543210";

let numbers = text.match(/\d+/g);

console.log(numbers);

let text1 = "Hello     Rahul    Welcome   to    JavaScript";

let result = text1.replace(/\s+/g, " ");

console.log(result);

function checkHello(text) {
    return /^Hello/.test(text);
}

console.log(checkHello("Hello Rahul")); // true
console.log(checkHello("Hello World")); // true
console.log(checkHello("Hi Hello"));    // false

let post = "Learning #JavaScript and #React is fun! #WebDevelopment";

let hashtags = post.match(/#[A-Za-z0-9_]+/g);

console.log(hashtags);