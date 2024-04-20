type Guest = { name: string; attending: boolean };

let guests: Guest[] = [
  { name: "Omar Ahmed", attending: true }, // Muslim name
  { name: "Akber", attending: true },  // Non-Muslim name (remains)
  { name: "Aisha Khan", attending: true },  // Muslim name
  // ... Add more guests here
];

function updateGuest(name: string, attending: boolean) {
  let foundGuest = guests.find((guest) => guest.name === name);
  if (foundGuest) {
    foundGuest.attending = attending;
  } else {
    console.error(`Guest "${name}" not found.`);
  }
}

// Guest who can't make it (from previous exercises)
const cancellingGuest = "John Doe"; // You can replace with a Muslim name
updateGuest(cancellingGuest, false);

// New guest and bigger table message
const newGuest = "Ali Hassan"; // Muslim name
guests.push({ name: newGuest, attending: true });
console.log("We found a bigger table! Inviting more guests.");

// Add more guests using spread syntax for readability
guests = [
  { name: "Fatima Ali", attending: true },  // Muslim name
  ...guests,
  { name: "Khalid Mohammed", attending: true }, // Muslim name
  ...guests,
  { name: "Ibrahim Hussein", attending: true }, // Muslim name
];

console.log("Updated Guest List:");
guests.forEach((guest) => console.log(`${guest.name}: ${guest.attending ? "Attending" : "Not Attending"}`));

function sendInvitation(guest: Guest) {
  console.log(`Sending invitation to ${guest.name}.`);
}

guests.forEach(sendInvitation);

console.log(`${cancellingGuest} cannot make it to the dinner.`);
