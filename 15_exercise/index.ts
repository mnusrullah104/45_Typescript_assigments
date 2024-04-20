type Guest = {
  name: string;
  attending: boolean;
};

let guests: Guest[] = [
  { name: "Ali", attending: true },
  { name: "Aslam", attending: true },
  // ... Add more guests here
];

function updateGuest(guestName: string, isAttending: boolean) {
  for (let i = 0; i < guests.length; i++) {
    if (guests[i].name === guestName) {
      guests[i].attending = isAttending;
      return;
    }
  }
  console.error(`Guest "${guestName}" not found in list.`);
}

// Simulate finding out a guest can't make it
const cancellingGuest = "Ali";
updateGuest(cancellingGuest, false);

// Modify guest list with a new guest
const newGuest = "Akber";
guests.push({ name: newGuest, attending: true });

console.log("Updated Guest List:");
guests.forEach((guest) => console.log(`${guest.name}: ${guest.attending ? "Attending" : "Not Attending"}`));

function sendInvitation(guest: Guest) {
  console.log(`Sending invitation to ${guest.name}.`);
}

// Send invitations to remaining guests
guests.forEach(sendInvitation);

// Print the name of the guest who can't make it
console.log(`${cancellingGuest} cannot make it to the dinner.`);
