//if block 
let alien_color: string = "green"; // Alien color set to green

if (alien_color === "green") {
  console.log("Player just earned 5 points for shooting the green alien!");
} else {
  console.log("Player earned points for shooting the alien, but the color is unknown."); // This line won't print
}



//else

let align_color: string = "yellow"; // Alien color set to yellow (not green)

if (alien_color === "green") {
  console.log("Player just earned 5 points for shooting the alien."); // This line won't print
} else {
  console.log("Player just earned 10 points for shooting the non-green alien!");
}
