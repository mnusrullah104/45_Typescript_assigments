// Define an interface for Magician
interface Magician {
    name: string;
}

// Initial list of magicians
let magicians: Magician[] = [
    { name: "Atif Aslam" },
    { name: "Zain farooq" },
    { name: "Abid naeemi" }
];

// Function to make magicians great
function make_great(magicians: Magician[]): Magician[] {
    let greatMagicians: Magician[] = [];
    for (let magician of magicians) {
        greatMagicians.push({ name: `the Great ${magician.name}` });
    }
    return greatMagicians;
}

// Function to show magicians
function show_magicians(magicians: Magician[]): void {
    for (let magician of magicians) {
        console.log(magician.name);
    }
}

// Call make_great function with a copy of the array of magicians' names
let greatMagicians: Magician[] = make_great([...magicians]);

// Call show_magicians with each array to show the original and modified arrays
console.log("Original Magicians:");
show_magicians(magicians);

console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
