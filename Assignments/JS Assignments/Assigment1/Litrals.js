// Create a function that accepts a user's name and age and returns: Hello Rahul, you are 22 years old. using template literals.
function greet(name, age) {
    return `Hello ${name}, you are ${age} years old.`;
}

console.log(greet("Rahul", 22));

// Create a function that generates a product description using product name, price, and category.
function product(name, price, category) {
    return `The product ${name} belongs to the ${category} category and costs ₹${price}.`;
}
console.log(product("Laptop", 55000, "Electronics"));

// Create a function that generates a student report card using template literals.
function Report(name, rollNo, marks, grade) {
    return `
    Name: ${name}
    Roll Number: ${rollNo}
    Marks: ${marks}
    Grade: ${grade}
    `;
}

console.log(Report("Rahul", 101, 85, "A"));

// Create a function that accepts an array of products and generates an HTML list using template literals.
function ProductList(products) {
    return `
        <ul>
            ${products.map(product => `<li>${product}</li>`).join("")}
        </ul>
    `;
}

const products = ["Laptop", "Mobile", "Tablet", "Headphones"];

console.log(ProductList(products));

// Create a function that generates a dynamic email message using username, company name, and designation.
function generateEmail(username, company, designation) {
    return `
    Hello ${username},
    Welcome to ${company}!
    We are happy to have you join our team
    as a ${designation}.
    Best Regards,
    ${company} Team`;
}

console.log(generateEmail("Rahul", "Google", "Software Developer"));

// Create a function that calculates the total price of products and displays the result using template literals.
function calculateTotal(products) {
    const total = products.reduce((sum, product) => {
        return sum + product.price;
    }, 0);

    return `The total price of all products is ${total}.`;
}

const productsList = [
    { name: "Laptop", price: 50000 },
    { name: "Mobile", price: 20000 },
    { name: "Headphones", price: 2000 }
];

console.log(calculateTotal(productsList));