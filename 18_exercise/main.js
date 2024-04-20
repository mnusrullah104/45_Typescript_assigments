var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var travelWishList = [
    "Pakistan", // Not alphabetical order
    "Plaestine",
    "Saudi Arabia",
    "Iceland",
    "Peru"
];
// Print original order
console.log("Original Wish List:");
travelWishList.forEach(function (place) { return console.log(place); });
// Print alphabetically sorted (without modifying original list)
console.log("\nWish List (Alphabetical - Copy):");
var sortedWishList = __spreadArray([], travelWishList, true).sort(); // Create a copy and sort
sortedWishList.forEach(function (place) { return console.log(place); });
// Print original order again (to show it's unchanged)
console.log("\nOriginal Wish List (Unmodified):");
travelWishList.forEach(function (place) { return console.log(place); });
// Print reverse alphabetical sorted (without modifying original list)
console.log("\nWish List (Reverse Alphabetical - Copy):");
sortedWishList.sort().reverse(); // Sort the copy and reverse
sortedWishList.forEach(function (place) { return console.log(place); });
// Print original order again (to show it's unchanged)
console.log("\nOriginal Wish List (Unmodified):");
travelWishList.forEach(function (place) { return console.log(place); });
// Reverse the original list
travelWishList.reverse();
console.log("\nWish List (Reversed):");
travelWishList.forEach(function (place) { return console.log(place); });
// Reverse the original list again (back to original order)
travelWishList.reverse();
console.log("\nWish List (Original Order Restored):");
travelWishList.forEach(function (place) { return console.log(place); });
// Sort the original list alphabetically
travelWishList.sort();
console.log("\nWish List (Sorted Alphabetically):");
travelWishList.forEach(function (place) { return console.log(place); });
// Sort the original list in reverse alphabetical order
travelWishList.sort().reverse();
console.log("\nWish List (Sorted Reverse Alphabetically):");
travelWishList.forEach(function (place) { return console.log(place); });
