type Guest = { name: string; attending: boolean };

let guests: Guest[] = [
  { name: "Omar Ahmed", attending: true },
  { name: "Arslan", attending: true },
  { name: "Aisha Khan", attending: true },
  // ... Add more guests here
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
const cancellingGuest = "Akber";

console.log("Unfortunately, the new dinner table won't arrive in time. We can only invite two guests.");



// Print the number of guests you're inviting
console.log(`You are inviting ${guests.length} guests to dinner.`);

// Functionality for removing guests and sending invitations can be maintained here if desired.
