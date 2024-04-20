var person_name = "Muhammad Nasrullah";
var lowercaseNumber = person_name.toLowerCase();
var uppercaseNumber = person_name.toUpperCase();
// Convert to titlecase
var titlecaseName = person_name.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
});
console.log("lowercase", lowercaseNumber);
console.log("uppercaseNumber", uppercaseNumber);
console.log("titlecasename:", titlecaseName);
