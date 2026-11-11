// Week 4 Day 2 warm-up — Bootstrap cards made by JavaScript (about 20 minutes)
// JavaScript can add Bootstrap classes too. className sets an element's classes.

// TODO first: change this to YOUR truck's menu.
const menu = [
  { name: "Lemonade", price: 2.80 },
  { name: "Sorrel", price: 9 },
  { name: "Ginger tea", price: 3.45 },
  { name: "Chai latte", price: 6.45 },
];

const area = document.getElementById("card-area");


// ---------- Example: ONE card ----------
const card = document.createElement("div");
card.className = "card p-3";          // Bootstrap classes, set from JavaScript
card.textContent = menu[0].name;
area.appendChild(card);


// ---------- Step 1 ----------
// TODO: Use forEach to make a card for EVERY menu item, showing its name and price.
// Then delete the example card code above.
const card2 = document.createElement("div");
card2.className = "card p-3";
card2.textContent = menu.name + ": $" + menu.price; 
area.appendChild(card2);


// ---------- Step 2 ----------
// TODO: Add more Bootstrap classes to each card, for example:
//   "card p-3 text-center border-primary"   or   "card p-3 bg-light shadow-sm"
// Save and watch the page change.


// ---------- Extra practice (if you finish early) ----------
// Give cheap items (under $5) a different class than the others. (forEach + if)
