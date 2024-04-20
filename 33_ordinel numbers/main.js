var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//loop
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    var ordinalEnding = void 0;
    if (number === 1) {
        ordinalEnding = "st";
    }
    else if (number === 2) {
        ordinalEnding = "nd";
    }
    else if (number === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log("".concat(number).concat(ordinalEnding));
}
// // Store the numbers 1 through 9 in an array
// const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // Loop through the array
// for (let i = 0; i < numbers.length; i++) {
//     let number = numbers[i];
//     let ordinalEnding: string;
//     // Use an if-else chain to determine the proper ordinal ending
//     if (number === 1) {
//         ordinalEnding = "st";
//     } else if (number === 2) {
//         ordinalEnding = "nd";
//     } else if (number === 3) {
//         ordinalEnding = "rd";
//     } else {
//         ordinalEnding = "th";
//     }
//     // Print the number with the proper ordinal ending
//     console.log(`${number}${ordinalEnding}`);
// }
