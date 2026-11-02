// Create a math.js file containing addition, subtraction, multiplication, and division functions. Export them and import them into app.js.
export function add(a, b) {
    return a + b;
}
export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}
export function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }

    return a / b;
}
// Create a module that exports a function to calculate the area of a circle.
export function calculateArea(radius) {
    return Math.PI * radius * radius;
}
// Create a module that exports multiple variables using named exports and import them into another file.
export let studentName = "Rahul";

export let age = 22;

export let course = "JavaScript";

export let marks = 85;
// Create a module using default export and import it with a different variable name.
function greet(name) {
    return `Hello ${name}, Welcome to JavaScript!`;
}

export default greet;
// Create a user authentication module that exports login(), logout(), and register() functions.
export function register(username) {
    return `${username} registered successfully!`;
}

export function login(username) {
    return `Welcome back, ${username}! You are logged in.`;
}

export function logout(username) {
    return `${username} logged out successfully!`;
}
// Create a shopping cart module that exports functions to add products, remove products, and calculate the total price.

let cart = [];

// Add product
export function addProduct(name, price) {

    cart.push({
        name: name,
        price: price
    });

    return `${name} added to cart successfully!`;
}

// Remove product
export function removeProduct(name) {

    let index = cart.findIndex(product => product.name === name);

    if (index !== -1) {
        cart.splice(index, 1);
        return `${name} removed from cart!`;
    }

    return `${name} not found in cart!`;
}

// Calculate total price
export function calculateTotal() {

    let total = cart.reduce((sum, product) => {
        return sum + product.price;
    }, 0);

    return `Total Cart Price: ₹${total}`;
}