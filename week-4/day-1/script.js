// Week 4 Day 1 — forEach: a shorter way to loop
// forEach runs a function once for every item. No counter, no i.
//
// Every step works the same way:
//   1. Read the EXAMPLE. Save, and see what it does.
//   2. Copy it under YOUR TURN.
//   3. Change what the comment says.

// First: replace this menu with YOUR truck's menu (keep the same shape).
const menu = [
  { name: "Lemonade", price: 2.8 },
  { name: "Ginger Tea", price: 3.95 },
  { name: "Peppermint", price: 3.95 },
  { name: "Red Raspberry", price: 3.95 },
  { name: "Chamomile", price: 3.95 },
  { name: "Chai latte", price: 4.79 },
  { name: "Sorrel", price: 5.69 },
  { name: "Warm Apple Cider", price: 5.69 },
  { name: "Hot Chocolate", price: 5.69 },
  { name: "Egg Nog", price: 5.69 },
  { name: "Coquito", price: 5.69 },
];


// ---------- Step 1: Same job, no counter ----------
// THE for LOOP YOU ALREADY KNOW: logs every name.
for (let i = 0; i < menu.length; i++) {
  console.log(menu[i].name);
}

// EXAMPLE: the same job with forEach.
// Remember form.addEventListener("submit", handleSubmit)? You handed the browser
// a function to run later. Here you hand forEach a function. It runs it once for
// each item, and passes that item in. So item is the Taco, then the Burrito...
function logName(item) {
  console.log(item.name);
}
menu.forEach(logName);

// YOUR TURN: log every item's PRICE.
// Change: logName → logPrice (2 places), and .name → .price
function logPrice(item){
  console.log(item.price.toFixed(2));
}
menu.forEach(logPrice);

// ---------- Step 2: Write the function right inside ----------
// EXAMPLE: logs "Taco is on the menu", "Burrito is on the menu"...
// This is the same idea, but the function has no name and sits inside the ( ).
// You'll see this shape everywhere. Notice how it ends: });
menu.forEach(function (item) {
  console.log(item.name + " is on the menu");
});
console.log("names:", names); // ["Lemonade", "Sorrel", "Ginger tea", "Chai Latte"]

// ---------- Step 1 ----------
// TODO: Use map to make a new list called labels, like "Taco — $4.50".
// Hint: item.price.toFixed(2) shows two decimal places.
const labels = menu.map(function(item) {
  return item.labels
});
console.log("labels:", labels); //Lemonade, Sorrel, Ginger tea, Chai latte

// ---------- Extra (if you finish early): add it up ----------
// EXAMPLE: COUNT the items. count starts at 0 BEFORE forEach,
// and goes up by 1 INSIDE the function.
let count = 0;
menu.forEach(function (item) {
  count = count + 1;
});
console.log("Items:", count);

// YOUR TURN: add up every PRICE into a total. Log it.
// Change: count → total, and + 1 → + item.price
