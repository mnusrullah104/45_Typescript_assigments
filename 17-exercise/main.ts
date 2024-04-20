type Guest = { name: string; attending: boolean };

let guests: Guest[] = [
  { name: "Omar Ahmed", attending: true },
  { name: "Akber", attending: true },
  { name: "Aisha Khan", attending: true },
  { name: "Fatima Ali", attending: true },
  { name: "Khalid Mohammed", attending: true },
  { name: "Ibrahim Hussein", attending: true },
];

function updateGuest(name: string, attending: boolean) {
  const foundGuest = guests.find((guest) => guest.name === name);
  if (foundGuest) {
    foundGuest.attending = attending;
  } else {
    console.error(`Guest "${name}" not found.`);
  }
}

// Guest who can't make it (from previous exercises) - Not used here
const cancellingGuest = "Ali";

console.log("Unfortunately, the new dinner table won't arrive in time. We can only invite two guests.");

// Remove guests until only two remain
while (guests.length > 2) {
  const removedGuest = guests.pop();
  if (removedGuest) {
    console.log(`Sorry, ${removedGuest.name}, but due to limited space, we can't invite you to dinner this time.`);
  }
}

// Print invitations to remaining guests
console.log("You're still invited to dinner:");
guests.forEach((guest) => console.log(`${guest.name}`));

// Remove remaining guests (for verification)
guests.length = 0; // Alternative: guests = [];

console.log("Guest List (should be empty):", guests);
