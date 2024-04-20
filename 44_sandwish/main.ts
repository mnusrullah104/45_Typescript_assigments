function makeSandwich(...items: string[]): void {
    console.log("Making sandwich with:");
    for (let item of items) {
        console.log(`- ${item}`);
    }
    console.log("Enjoy your sandwich!");
}

// Call the function with different numbers of arguments
makeSandwich("Ham", "Cheese", "Lettuce");
makeSandwich("Turkey", "Swiss cheese");
makeSandwich("Peanut butter", "Jelly");
