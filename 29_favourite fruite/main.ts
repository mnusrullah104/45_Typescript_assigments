let favorite_fruits: string[] = ["mango", "banana", "kiwi"];

// Independent if statements checking for fruits in the array

if (favorite_fruits.includes("mango")) {
  console.log("You really like mangoes!");
}

if (favorite_fruits.includes("banana")) {
  console.log("You really like bananas!");
}

if (favorite_fruits.includes("kiwi")) {
  console.log("You really like kiwis!");
}

if (favorite_fruits.includes("apple")) { // This fruit is not in the favorite_fruits array
  console.log("You really like apples!"); // This line won't print
}

if (favorite_fruits.includes("grape")) { // This fruit is not in the favorite_fruits array
  console.log("You really like grapes!"); // This line won't print
}

