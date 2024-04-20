var car = "corolla";
var numDoors = 4;
var isElectric = false;
var fruits = ["apple", "banana", "orange"];
// String equality and inequality (True & False)
console.log("Is car lowercase 'corolla'? I predict False.");
console.log(car === "corolla".toLowerCase()); // False (checks for value and type equality)
console.log("Does car contain 'rolla'? I predict True.");
console.log(car.includes("rolla")); // True (checks if substring exists)
// Lowercase function tests (True & False)
console.log("Is 'COROLLA' lowercase 'corolla'? I predict True.");
console.log("COROLLA".toLowerCase() === "corolla"); // True (converts to lowercase first)
console.log("Is 'corolla' lowercase 'COROLLA'? I predict False.");
console.log("corolla".toLowerCase() === "COROLLA"); // False (doesn't modify original string)
// Numerical tests (True & False for each operator)
console.log("Is numDoors equal to 5? I predict False.");
console.log(numDoors === 5); // False
console.log("Is numDoors greater than 3? I predict True.");
console.log(numDoors > 3); // True
console.log("Is numDoors less than or equal to 4? I predict True.");
console.log(numDoors <= 4); // True
// AND and OR operators (True & False for each)
console.log("Is numDoors 4 and isElectric false? I predict True.");
console.log(numDoors === 4 && isElectric === false); // True (both conditions met)
// Item in array (True & False)
console.log("Is 'apple' in the fruits array? I predict True.");
console.log(fruits.includes("apple")); // True
console.log("Is 'grape' in the fruits array? I predict False.");
console.log(fruits.includes("grape")); // False
// Item not in array (True)
console.log("Is 'mango' not in the fruits array? I predict True.");
console.log(!fruits.includes("mango")); // True (checks if item is NOT present)
