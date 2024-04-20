function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making sandwich with:");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("- ".concat(item));
    }
    console.log("Enjoy your sandwich!");
}
// Call the function with different numbers of arguments
makeSandwich("Ham", "Cheese", "Lettuce");
makeSandwich("Turkey", "Swiss cheese");
makeSandwich("Peanut butter", "Jelly");
