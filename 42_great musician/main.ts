let magicians: string[] = ["aTIF ASLAM", "sHAHID AFRIDI", "aLI ASGHER"];

function show_magicians(magicians: string[]): void {
  console.log("Magicians performing tonight:");
  for (const magician of magicians) {
    console.log(magician);
  }
}

// Function to modify the magicians array (avoiding reference issues)
function make_great(magicians: string[]) {
  // Create a new empty array to store the modified names
  const modifiedMagicians: string[] = [];

  // Loop through the original array and add "the Great" to each name
  for (const magician of magicians) {
    modifiedMagicians.push(`${magician} the Great`);
  }

  // Assign the modified array back to the original variable (cautious approach)
  // This line can be omitted if you prefer not to modify the original array
  magicians = modifiedMagicians;
}

// Make the magicians great (modify the array with new names)
make_great(magicians);

// Show the updated list of magicians
show_magicians(magicians);
