var guests = [
    { name: "Omar Ahmed", attending: true },
    { name: "Akber", attending: true },
    { name: "Aisha Khan", attending: true },
    { name: "Fatima Ali", attending: true },
    { name: "Khalid Mohammed", attending: true },
    { name: "Ibrahim Hussein", attending: true },
];
function updateGuest(name, attending) {
    var foundGuest = guests.find(function (guest) { return guest.name === name; });
    if (foundGuest) {
        foundGuest.attending = attending;
    }
    else {
        console.error("Guest \"".concat(name, "\" not found."));
    }
}
// Guest who can't make it (from previous exercises) - Not used here
var cancellingGuest = "Ali";
console.log("Unfortunately, the new dinner table won't arrive in time. We can only invite two guests.");
// Remove guests until only two remain
while (guests.length > 2) {
    var removedGuest = guests.pop();
    if (removedGuest) {
        console.log("Sorry, ".concat(removedGuest.name, ", but due to limited space, we can't invite you to dinner this time."));
    }
}
// Print invitations to remaining guests
console.log("You're still invited to dinner:");
guests.forEach(function (guest) { return console.log("".concat(guest.name)); });
// Remove remaining guests (for verification)
guests.length = 0; // Alternative: guests = [];
console.log("Guest List (should be empty):", guests);
