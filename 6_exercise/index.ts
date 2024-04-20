
let personName: string = "\t   John Doe\n";

// Print the name with  whitespace
console.log("Name with whitespace:");
console.log("[" + personName + "]");

// Strip whitespace using trim() function
let strippedName: string = personName.trim();

// Print the stripped name
console.log("\nName after stripping whitespace:");
console.log("[" + strippedName + "]");
