function make_shirt(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`You ordered a ${size}-sized shirt with the message: "${message}".`);
}

// Make a large shirt with default message
make_shirt();

// Make a medium shirt with default message
make_shirt("medium");

// Make a small shirt with a different message
make_shirt("small", "Coding is fun!");
