let magicians: string[] = ["Atif aslam", "Nusrat", "Rahat"];

function show_magicians(magicians: string[]): void {
  console.log("Magicians performing tonight:");
  for (const magician of magicians) {
    console.log(magician);
  }
}

show_magicians(magicians);
