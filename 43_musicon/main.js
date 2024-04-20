var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Initial list of magicians
var magicians = [
    { name: "Harry Houdini" },
    { name: "David Copperfield" },
    { name: "Penn Jillette" }
];
// Function to make magicians great
function make_great(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        greatMagicians.push({ name: "the Great ".concat(magician.name) });
    }
    return greatMagicians;
}
// Function to show magicians
function show_magicians(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician.name);
    }
}
// Call make_great function with a copy of the array of magicians' names
var greatMagicians = make_great(__spreadArray([], magicians, true));
// Call show_magicians with each array to show the original and modified arrays
console.log("Original Magicians:");
show_magicians(magicians);
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
