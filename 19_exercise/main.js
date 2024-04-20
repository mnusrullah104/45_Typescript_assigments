var guests = [
    { name: "Omar Ahmed", attending: true },
    { name: "Arslan", attending: true },
    { name: "Aisha Khan", attending: true },
    // ... Add more guests here
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
var cancellingGuest = "Akber";
console.log("Unfortunately, the new dinner table won't arrive in time. We can only invite two guests.");
// Print the number of guests you're inviting
console.log("You are inviting ".concat(guests.length, " guests to dinner."));
// Functionality for removing guests and sending invitations can be maintained here if desired.
