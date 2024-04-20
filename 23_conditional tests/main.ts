let car = "Corolla";
let numDoors= 4;
let isElectric=false;

// Test 1; Equality check  "True Pridiction"
console.log( "Is car =='Corolla'? I predict true.");
console.log(car=="Corolla");

// Test no 2: Equality check  "True Pridiction"
console.log( "Is car =='Corolla'? I predict true.");
console.log(car==="Corolla");

// Test no 3: Inequality check  "False Pridiction"
console.log( "Is car !='Corolla'? I predict false.");
console.log(car !="Corolla");

//Test no 4: Less then Comparisonn "False Pridiction"
console.log("is numDoors <4? I predict false");
console.log(numDoors <4);

// Test no 5: Greater then Comparison
console.log("is numDoors >2? I predict true");
console.log(numDoors >2);


// Test 6: Logical AND (True prediction)
console.log("Is car 'Corolla' and isElectric is false? I predict True.");
console.log(car === "Corolla" && isElectric === false); // True (both conditions are met)

// Test 7: Logical OR (False prediction)

// Test 8: Checking truthiness (True prediction)
console.log("Is numDoors considered truthy? I predict True.");
console.log(!!numDoors); // True (non-zero numbers are truthy)

// Test 9: Checking falsiness (True prediction)
console.log("Is isElectric considered falsy? I predict True.");
console.log(!isElectric); // True (false is falsy)

// Test 10: Nullish coalescing (True prediction)
console.log("If color is null, use 'red'. I predict 'red'.");
let color = null;
console.log(color ?? "red"); // True (null is nullish, so 'red' is used)
