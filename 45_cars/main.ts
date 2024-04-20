function create_car(manufacturer: string, model: string, ...rest: [string, string][]) {
    // Create an empty car object
    const car: { [key: string]: string } = {};
  
    // Set mandatory properties
    car.manufacturer = manufacturer;
    car.model = model;
  
    // Add optional properties from rest arguments
    for (const [key, value] of rest) {
      car[key] = value;
    }
  
    // Return the car object
    return car;
  }
  
  // Call the function with required and optional arguments
  const myCar = create_car(
    "Honda",
    "Civic",
    "color",
    "red",
    "year",
    2023
  );
  
  console.log(myCar); // Print the car object
  