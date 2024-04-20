var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var guests = [
    { name: "Omar Ahmed", attending: true }, // Muslim name
    { name: "Jane Smith", attending: true }, // Non-Muslim name (remains)
    { name: "Aisha Khan", attending: true }, // Muslim name
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
// Guest who can't make it (from previous exercises)
var cancellingGuest = "John Doe"; // You can replace with a Muslim name
updateGuest(cancellingGuest, false);
// New guest and bigger table message
var newGuest = "Ali Hassan"; // Muslim name
guests.push({ name: newGuest, attending: true });
console.log("We found a bigger table! Inviting more guests.");
// Add more guests using spread syntax for readability
guests = __spreadArray(__spreadArray(__spreadArray(__spreadArray([
    { name: "Fatima Ali", attending: true }
], guests, true), [
    { name: "Khalid Mohammed", attending: true }
], false), guests, true), [
    { name: "Ibrahim Hussein", attending: true }, // Muslim name
], false);
console.log("Updated Guest List:");
guests.forEach(function (guest) { return console.log("".concat(guest.name, ": ").concat(guest.attending ? "Attending" : "Not Attending")); });
function sendInvitation(guest) {
    console.log("Sending invitation to ".concat(guest.name, "."));
}
guests.forEach(sendInvitation);
console.log("".concat(cancellingGuest, " cannot make it to the dinner."));
