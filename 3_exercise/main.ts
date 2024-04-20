var person_name="Muhammad Nasrullah";
// lowercase name
var  lowercaseNumber =person_name.toLowerCase();
// uppercase name
var uppercaseNumber =person_name.toUpperCase();
// Convert to titlecase
let titlecaseName: string = person_name.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
});

console.log("lowercase",lowercaseNumber);
console.log("uppercaseNumber",uppercaseNumber);
console.log("titlecasename:",titlecaseName)