// Day 4 — Loops: for and forEach
// A loop runs the same code once for every itecommand:workbench.action.openSettings?%5B%22git.openRepositoryInParentFolders%22%5Dm in a list.
// Tomorrow's graded work uses both loops, so practice them here.

// TODO first: replace this menu with YOUR truck's menu (keep the same shape).
const menu = [
  { name: "Lemonade", price: 2.80 },
  { name: "Matcha", price: 6.99 },
  { name: "Chai-latte", price: 5.25 },
  { name: "Sorrel", price: 3 },
];


// ---------- Step 1: A for loop ----------
// Example: log every item's name.
for (let i = 0; i < menu.length; i++) {
  console.log("for loop:", menu[i].name);
}

// TODO: Write a for loop that logs every item's PRICE.

for (let i = 0; i < 3; i++)
  console.log("for loop:", menu[i].price);

// ---------- Step 2: forEach ----------
// Same job, shorter to write. forEach hands you each item, one at a time.
// Example:
menu.forEach(function (item) {
  console.log("forEach:", item.name);
});

// TODO: Use forEach to log a sentence for each item, like "Taco costs $4.5".
menu.forEach(function(item)){
  console.log("forEach:", Lemonade.price);
  console.log("forEach:", Matcha.price);
  console.log("forEach", Sorrel.price);
  console.log("forEach", Chai-latte,price);
}

// ---------- Step 3: Put the menu on the page ----------
// Example: one item, made safely with createElement + textContent.
const list = document.getElementById("menu-list");
const exampleLi = document.createElement("li");
exampleLi.textContent = "Example: " + menu[0].name;
list.appendChild(exampleLi);

// TODO: Use forEach to add an <li> for EVERY menu item, showing its name and price.
// Then delete the example <li> code above.


// ---------- Step 4: A loop that adds up ----------
// TODO: Use a for loop to add up every price into a total. Log the total.
// Hint: start with  let total = 0;  then add each price inside the loop.


// ---------- Extra practice (if you finish early) ----------
// 1. Count how many items cost less than $5 (a loop + an if).
// 2. Sneak peek at next week: what order do these two lines log in? Guess, then try it.
//    setTimeout(function () { console.log("Order up!"); }, 2000);
//    console.log("Taking your order...");
