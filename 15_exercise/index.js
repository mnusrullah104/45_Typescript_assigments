var guests = [
    { name: "Ali", attending: true },
    { name: "Aslam", attending: true },
    // ... Add more guests here
];
function updateGuest(guestName, isAttending) {
    for (var i = 0; i < guests.length; i++) {
        if (guests[i].name === guestName) {
            guests[i].attending = isAttending;
            return;
        }
    }
    console.error("Guest \"".concat(guestName, "\" not found in list."));
}
// Simulate finding out a guest can't make it
var cancellingGuest = "Ali";
updateGuest(cancellingGuest, false);
// Modify guest list with a new guest
var newGuest = "Akber";
guests.push({ name: newGuest, attending: true });
console.log("Updated Guest List:");
guests.forEach(function (guest) { return console.log("".concat(guest.name, ": ").concat(guest.attending ? "Attending" : "Not Attending")); });
function sendInvitation(guest) {
    console.log("Sending invitation to ".concat(guest.name, "."));
}
// Send invitations to remaining guests
guests.forEach(sendInvitation);
// Print the name of the guest who can't make it
console.log("".concat(cancellingGuest, " cannot make it to the dinner."));
