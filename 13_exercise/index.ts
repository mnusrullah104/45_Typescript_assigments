// Define an array type to hold strings (for vehicle names)
let vehicles: string[];

// Option 1: Initialize the array with values during declaration
vehicles = ["Honda CBR650R", "Tesla Model S", "Land Rover Defender"];

// Option 2: Declare the array and assign values later
// vehicles: string[];  // Declared above
vehicles[0] = "Honda moterCycle";
vehicles[1] = "Tesla Model S";
vehicles[2] = "Land cruuiser";

// Loop through the array and print statements
for (let i = 0; i < vehicles.length; i++) {
  console.log(`I would love to own a ${vehicles[i]}.`);
}
