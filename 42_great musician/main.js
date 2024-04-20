var magicians = ["David Copperfield", "Criss Angel", "Dynamo"];
function show_magicians(magicians) {
    console.log("Magicians performing tonight:");
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Function to modify the magicians array (avoiding reference issues)
function make_great(magicians) {
    // Create a new empty array to store the modified names
    var modifiedMagicians = [];
    // Loop through the original array and add "the Great" to each name
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        modifiedMagicians.push("".concat(magician, " the Great"));
    }
    // Assign the modified array back to the original variable (cautious approach)
    // This line can be omitted if you prefer not to modify the original array
    magicians = modifiedMagicians;
}
// Make the magicians great (modify the array with new names)
make_great(magicians);
// Show the updated list of magicians
show_magicians(magicians);
