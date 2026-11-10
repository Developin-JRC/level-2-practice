// Week 4 Day 1 warm-up — map review (about 20 minutes)
// Friday you used map. Today: map turns menu OBJECTS into labels you can show.

// TODO first: change this to YOUR truck's menu.
const menu = [
  { name: "Lemonade", price: 2.8 },
  { name: "Sorrel", price: 4.95 },
  { name: "Ginger tea", price: 3.25 },
  { name: "Chai latte", price: 6.79 },
];


// ---------- Example ----------
// map makes a NEW list. Whatever you return goes into it.
const names = menu.map(function (item) {
  return item.name;
});
console.log("names:", names); // ["Lemonade", "Sorrel", "Ginger tea", "Chai latte"]


// ---------- Step 1 ----------
// TODO: Use map to make a new list called labels, like "Taco — $4.50".
// Hint: item.price.toFixed(2) shows two decimal places.
const labels = menu.map(function(item) {
  return item.labels
});
console.log("labels:", labels); //Lemonade, Sorrel, Ginger tea, Chai latte

// ---------- Step 2 ----------
// TODO: Use forEach to show every label on the page as an <li> in #menu-list.
// (createElement, textContent, appendChild — same as last week.)


// ---------- Extra practice (if you finish early) ----------
// 1. Use map to make a list of prices only. Then add them up with a for loop.
// 2. Use map to make every name UPPERCASE (hint: .toUpperCase()).
