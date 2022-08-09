console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

const firstName = "Enmanuel";
let lastName = "Ozoria";
var age = 24;
let exercise1 = document.getElementById("exercise1");
exercise1.innerHTML = `${firstName} ${lastName} ${age}`;

let firstname = "Marc";
lastName = "Spector";
age = 38;
let exercise2 = document.getElementById("exercise2");
exercise2.innerHTML = `${firstname} ${lastName} ${age}`;

let language = "JavaScript";
let createdYear = 1995;
let isCaseSensitive = true;
let exercise3 = document.getElementById("exercise3");
exercise3.innerHTML = `${language} came out in ${createdYear}? ${isCaseSensitive}`;

let price = 19.99;
let isOnSale = false;
let salePercentage = 15;
let stock = 0;
let inStock = false;
let selectedSize = "M";
let exercise4 = document.getElementById("exercise4");
exercise4.innerHTML = `${price} is a discounted price? ${isOnSale}. If it was, it would be ${salePercentage} off. Are there any ${selectedSize} sized items in stock? ${inStock}. There are ${stock} in stock.`;

let title = "Name of the Wind";
let author = "Patrick Rothfuss";
let pageCount = 722;
let bookmark = 456;
let hasRead = true;
let exercise5 = document.getElementById("exercise5");
exercise5.innerHTML = `${title} by ${author} has ${pageCount} pages. I left off on page ${bookmark}. To say that I've read the whole book is not ${hasRead}.`;