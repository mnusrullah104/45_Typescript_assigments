function carInfo(manufacturer, modelName) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    // Add other name-value pairs to the car object
    for (var key in options) {
        car[key] = options[key];
    }
    return car;
}
// Call the function with required information and additional name-value pairs
var car = carInfo("Toyota", "Camry", color, "Blue", year, 2023);
// Print the returned object to ensure all information was stored correctly
console.log(car);
