const countries :string[]=[
    "pakistan",
    "India",
    "Palestine",
    "Africa",
    "Saudi Arabia",
    "China"
];

// Accessing the index which is out of bounds
console.log(countries [1]);


//List of countries
console.log("list of countries");
countries.forEach(country =>{
    console.log(country);
}) ;
