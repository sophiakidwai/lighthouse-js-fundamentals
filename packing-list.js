

const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

console.log("Kitchen stuff to pack:");
for (let i = 0; i < packingList.length; i++) {
  console.log(packingList[i]);
}

/* for loops are a pretty good option when we want to iterate over items in an array. But that doesn't mean we can't use a while loop to do it. Modify your loop in packing-list.js to like the one below */

console.log("Litchen stuff to pack:");
let i = 0;
while (i < packingList.length) {
  console.log(packingList[i]);
  i++
}