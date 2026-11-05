// Day 1 — Variables, arrays, objects, functions
// Read each Example, then write YOUR truck's version under the TODOs.
// See the results in the console (right-click the page → Inspect → Console).

// ---------- Step 1: Variables ----------
// Example:
// Create 3 variables using "let" or "const"
const exampleName = "Taco Rocket";  /*string (text)*/
const exampleYears = 3;          /* number*/
const exampleIsOpen = true;      /*boolean (true or false)*/

// Log variables
console.log(exampleName, exampleYears, exampleIsOpen);
console.log(typeof exampleName); /* typeof tells you the type*/

/* TODO: Make 3 variables for YOUR truck: a 
name, a number, and a true/false.*/
const truckName = "Juicy Remedies"; /*food truck name*/
const yearOpened = 2018; //year established
Boolean isOpen = true; //open for business

/* TODO: console.log them, and log the typeof each one.*/
console.log(truckName);
console.log(yearOpened);
console.log(isOpen);
console.log(typeof truckName);
console.log(typeof yearOpened);
console.log(typeof isOpen);

// -------- Step 2: An array (a list) -----
// Example:
const truckMenu = ["tacos", "burrito", "nachos"];
console.log(truckMenu[0]); // first item: index 0
console.log(truckMenu.length); // how many items


// TODO: Make an array of 3 or more things YOUR truck sells.
const jrcMenu = ["lemonade", "sorrel", "chai latte", "ginger tea"];
console.log(jrcMenu[0]); // first item: index 0
console.log(jrcMenu.length-1); //last item
console.log(jrcMenu[length]); //how many items

// ---------- Step 3: An object (one thing with details) ----------
// Example:
const exampleItem = {name: "tacos", price: 4.5, spicy: true};
console.log(exampleItem.name);     // dot notation
console.log(exampleItem["price"]); // bracket notation

// TODO: Make an object for one of YOUR menu items (name, price, spicy).
// TODO: Log one property with dot notation and one with bracket notation.
const jrcMenuItem = {name: "lemonade", price: 2.80, hot:false};
console.log(jrcMenuItem.name);
console.log(jrcMenuItem["price"]);


// ---------- Step 4: A function ----------
// Example:
function addTip(price, tip) {
  return price + tip;
}
console.log(addTip(10, 2));          // 12

// TODO: Write a function orderTotal(price, quantity) that RETURNS price * quantity.
// TODO: Before you run it, guess what orderTotal(4.5, 3) gives. Then log it.
function orderTotal(price, quantity) {
  return price * quantity;
}

// ---------- Extra practice (if you finish early) ----------
// 1. Change your menu item's price AFTER you made the object, then log it again.
// 2. Write isCheap(price): return "cheap!" if price is under 5, otherwise "fancy".
